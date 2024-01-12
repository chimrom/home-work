import {useContext} from "react";
import {React2Context} from "../React2Context.jsx";

export const Child = () => {
    const props = useContext(React2Context)
    console.log('props',props)
    return <div>

    </div>
}