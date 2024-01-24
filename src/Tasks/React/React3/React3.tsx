import {useState} from "react";
import {ChangeEvent} from "react";
import data from "../../../developers.json";
import {Developer} from "../../../typings/allInterfaces";
import {ListUsers} from "../components/ListUsers/ListUsers";

import {Wrapper} from "../components/Wrapper/Wrapper";

export const React3 = () => {
    const [developers, setDepelopers] = useState<Developer[] | []>(data.developers);
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleDelete = (id:string, fio: string) => {
        console.log(id,fio)
    };


    return <Wrapper>
        <div>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <div>{inputValue}</div>
            <ListUsers developers={developers} handleDelete={handleDelete}/>
        </div>
    </Wrapper>

}


