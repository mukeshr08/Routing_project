import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAxiosfetch = (URL) => {
    const [data,setdata]=useState([])
    const [fetchError,setfetchError]=useState(null)
    const [isLoading,setisloading]=useState(false)
    useEffect(()=>{
        let isMounted=true;
        const source=axios.CancelToken.source()
        const fetchdata=async()=>{
            try{
                const response=await axios.get(URL,{cancelToken:source.token})
                if(isMounted){
                    setdata(response.data)
                    setfetchError(null)

                }
            }catch(err){
                if(isMounted){
                    setfetchError(err.message)
                    setdata([])
                }
            }finally{
                isMounted&&setisloading(false)
            }
        }
        fetchdata(URL)
        const cleanup=()=>{
            isMounted=false
            source.cancel()
        }
        return cleanup
    },[URL])
  return {data,fetchError,isLoading}
}

export default useAxiosfetch