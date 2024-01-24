import {FC} from "react";
import {Developer} from "../../../../typings/allInterfaces";
import {UserCardTs} from "../UsersCard/UserCardTs";

import styles from './ListUsers.module.sass'

interface IProps {
    developers: Developer[] | []
    handleDelete: (id: string | null, fio: string) => void;
}
export const ListUsers:FC<IProps> = ({developers,handleDelete}) => {


    return <div className={styles.cardList}>
        {developers.map((el) => (
            <UserCardTs key={el.id} {...el} handleDelete={handleDelete} />
        ))}
    </div>
}