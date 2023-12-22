import {useNavigate} from "react-router-dom";
import {createItem} from "../../utils/createItem.js";

import './JSMain.sass'

export const JSMain = () => {
    const navigate = useNavigate()
    return <div className='js-main-wrapper'>
        {createItem(21).map((el) =>
        <div key={el} className='js-main-wrapper__item' onClick={() => navigate(`/js/${el + 1}`)}>JS {el + 1}</div>
        )}
    </div>
}