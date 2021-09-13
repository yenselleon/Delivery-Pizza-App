import React, { useEffect, useState } from 'react'
import { getImage } from '../helper/fetchRequest'

const useFetch = (url) => {
    
    const [data, setData] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        
        getImage().then(data =>{
            const sliceData = data?.slice(0, 20);
            
            setData({
                loading: false,
                error: null,
                data: sliceData,
            })

        })
        
    }, [])


    return data;

}

export default useFetch
