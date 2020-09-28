import {useState,useEffect} from 'react'

export default function useFetch(URL){
  const [data,setData] = useState()
  const fetchData = (URL) =>{
	return fetch(URL)
    .then(res=>res.json())
    .then(({data})=>{
      setData(data)
    })
    .catch(err=>{
      console.err(err)
    })
  }
  useEffect(()=>{
  	fetchData(URL)
  },[])
  return [data,fetchData]
}