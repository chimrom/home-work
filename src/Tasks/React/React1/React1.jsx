import { useState} from "react";
import data from "../../../developers.json";
import {addToLocalStorage, getAllStoredData} from "../../../utils/localStorage.js";
import { UserCard } from "../components/UsersCard/UsersCard";

import styles from "./React1.module.css";

export const React1 = () => {
    const [developers, setDepelopers] = useState(data.developers);
    const [newDeveloper, setNewDeveloper] = useState({
        fio: "",
        level: "",
        role: "",
        id: null,
    });
    const [filters, setFilters] = useState({
        fio: "",
        level: "",
        role: "",
    });
    console.log(getAllStoredData())

    const isFilter = filters.fio && filters.level && filters.role;
    const filteredDevelopers = isFilter ? filteredData() : developers;

    const handleChange = (event) => {
        setNewDeveloper((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleChangeFilter = (event) => {
        setFilters((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleAddNewDeveloper = () => {
        setDepelopers((prev) => [...prev, { ...newDeveloper, id: Date.now() }]);
        addToLocalStorage('add', `Был добавлен ${newDeveloper.fio}`)
        setNewDeveloper({ ...newDeveloper, fio: "", level: "", role: "" });
    };

    const handleDelete = (id, fio) => {
        setDepelopers((prev) => prev.filter((el) => id !== el.id));
        addToLocalStorage('delete', `Был удален ${fio}`)
    };

    function filteredData() {
        return developers.filter((item) => {
            return (
                item.fio.toLowerCase().includes(filters.fio.toLowerCase()) &&
                item.level === filters.level &&
                item.role === filters.role
            );
        });
    }

    const clearFilter = () => {
        setFilters({ ...filters, fio: "", level: "", role: "" });
    };



    return (
        <div className={styles.wrapper}>
            <div>
                создание нового
                <input
                    type="text"
                    name="fio"
                    onChange={handleChange}
                    value={newDeveloper.fio}
                    placeholder="ФИО"
                />
                <select
                    value={newDeveloper.level}
                    name="level"
                    onChange={handleChange}
                >
                    <option value="">Выберите уровень</option>
                    <option value="junior">junior</option>
                    <option value="middle">middle</option>
                    <option value="senior">senior</option>
                </select>
                <select
                    value={newDeveloper.role}
                    name="role"
                    onChange={handleChange}
                >
                    <option value="">Выберите роль</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                </select>
                <button
                    onClick={handleAddNewDeveloper}
                    disabled={
                        !newDeveloper.fio ||
                        !newDeveloper.level ||
                        !newDeveloper.role
                    }
                >
                    add
                </button>
            </div>
            <div>
                фильтр
                <input
                    type="text"
                    name="fio"
                    value={filters.fio}
                    onChange={handleChangeFilter}
                    placeholder="ФИО"
                />
                <select
                    value={filters.level}
                    name="level"
                    onChange={handleChangeFilter}
                >
                    <option value="">Выберите уровень</option>
                    <option value="junior">junior</option>
                    <option value="middle">middle</option>
                    <option value="senior">senior</option>
                </select>
                <select
                    value={filters.role}
                    name="role"
                    onChange={handleChangeFilter}
                >
                    <option value="">Выберите роль</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                </select>
                <button onClick={clearFilter}>clear filter</button>
            </div>
            <div className={styles.cardList}>
                {filteredDevelopers.map((el) => (
                    <UserCard key={el.id} {...el} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};
