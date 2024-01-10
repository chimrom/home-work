import { useNavigate } from "react-router-dom";
import "./MainPage.sass";
export const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="task-list">
            <div
                className="task-list__item"
                onClick={() => navigate("/frontend")}
            >
                Frontend
            </div>
            <div className="task-list__item" onClick={() => navigate("/js")}>
                JS
            </div>
            <div className="task-list__item" onClick={() => navigate("/react")}>
                React
            </div>
        </div>
    );
};
