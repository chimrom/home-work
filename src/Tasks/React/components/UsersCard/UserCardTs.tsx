import {FC} from "react";
import {Developer} from "../../../../typings/allInterfaces";
import styles from "./UsersCard.module.css";

interface IProps extends Developer {
    handleDelete: (id: string | null, fio: string) => void;
}

export const UserCardTs:FC<IProps> = ({ fio, id, level, role, handleDelete }) => {
    return (
        <div id={id as string} className={styles.wrapper}>
            <div className={styles.infoBlock}>
                <div>{fio}</div>
                <div>
                    <div>{level}</div>
                    <div>{role}</div>
                </div>
            </div>
            <button onClick={() => handleDelete(id,fio)}>delete</button>
        </div>
    );
};
