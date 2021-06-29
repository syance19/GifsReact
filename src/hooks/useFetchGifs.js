import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifts'
export const useFetchGifs= (category) =>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{
        getGifs(category)
        .then(img=>{
            setTimeout(() => {
                setstate({
                    data:img,
                    loading:false
                });
            }, 1500);  
        })
    },[category])
    return state;//data[] loading true
}