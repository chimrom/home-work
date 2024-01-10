import styles from "./UsersCard.module.css";

export const UserCard = ({ fio, id, level, role, handleDelete }) => {
    return (
        <div id={id} className={styles.wrapper}>
            <div className={styles.infoBlock}>
                <div className={styles.name}>{fio}</div>
                <div>
                    <div className={styles.level}>{level}</div>
                    <div className={styles.role}>{role}</div>
                </div>
            </div>
            <button onClick={() => handleDelete(id)}>delete</button>
        </div>
    );
};
