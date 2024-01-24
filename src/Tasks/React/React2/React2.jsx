import {useState, useRef, useMemo, memo, useCallback} from "react";
import {useFetchData} from "../../../hooks/useFetchData.js";
import {useOutsideClick} from "../../../hooks/useOutsideClick.js";
import {useResize} from "../../../hooks/useResize.js";
import {React2Context} from "../React2Context.jsx";
import {Child} from "./Child.jsx";

export const React2 = () => {
    const envExample = import.meta.env.VITE_SOME_KEY
    console.log({envExample})
    console.log(import.meta.env)

    const [isOpen, setIsOpen] = useState(false)
    const {data, loading, error} = useFetchData('https://jsonplaceholder.typicode.com/posts')
    const ref = useRef(null)
    const {width} = useResize()
    // const { ref, isActive, setIsActive } = useOutsideClick(false);
    const handleClick = () => {
        setIsOpen(false)
    };


    useOutsideClick(ref, handleClick)

    if(loading){
        return <div>Загрузка...</div>
    }

    if(error) {
        return <div style={{color: 'red'}}>{error}</div>
    }


    return <div>
        {data.length ? <div>Пришло {data.length} элементов</div> : <div>Данные отсутствуют</div>}

        <button onClick={() => setIsOpen(true)}>Модалка</button>
        <div ref={ref} style={{display: isOpen ? 'block' : 'none'}}>
            Here is some content. Clicking outside of this content will close it.
        </div>

        <div>
            сейчас размер = {width}
        </div>

        <React2Context.Provider value={{data}}>
            <Child/>
        </React2Context.Provider>


    </div>

}