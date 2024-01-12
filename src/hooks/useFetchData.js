import { useState, useEffect } from 'react'
import axios from "axios";
export const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const getData = async (url) => {
            try{
                const response = await axios.get(url)
                if(response.status === 200){
                    setData(response.data)
                }
            }catch (error){
                setError(error.message)
            }finally {
                setLoading(false)
            }
        }
        getData(url)
    }, [url])

    return {data,loading,error}

}