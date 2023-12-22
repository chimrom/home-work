import {useState} from "react";
import axios from "axios";
import '../../utils/jqueryWrapper.js'
export const JsTask2 = () => {
    const [valueAxios, setValueAxios] = useState(0)


    async function addValueOnAxios(){
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {userId: 2, id: 231231, title: 'new post', body: 'text'})
        }catch (error){
            console.log(error)
        }
    }

    function ajaxPost() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'post',
            dataType: 'json',
            data: {userId: 2, id: 231231, title: 'new post', body: 'text'},
            success: (data) => {
                console.log('добавил пост',data)
            },
            error: (error) => {
                console.error(error)
            }
        })
    }

    return <div>
        <button onClick={addValueOnAxios}>axios post</button>
        <button onClick={ajaxPost}>ajax post</button>

    </div>
}