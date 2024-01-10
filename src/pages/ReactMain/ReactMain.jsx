import { useNavigate } from "react-router-dom";
import { createItem } from "../../utils/createItem.js";

import "./ReactMain.sass";

export const ReactMain = () => {
    const navigate = useNavigate();
    return (
        <div className="react-main-wrapper">
            {createItem(21).map((el) => (
                <div
                    key={el}
                    className="react-main-wrapper__item"
                    onClick={() => navigate(`/react/${el + 1}`)}
                >
                    React {el + 1}
                </div>
            ))}
        </div>
    );
};
