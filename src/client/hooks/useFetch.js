import { useEffect,useState } from 'react'

export default function useFetch(url,dep){
  const [load,setLoad] = useState(false)
  const [dataFetched,setDataFetched] = useState([])
  
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then((res)=>{
      setLoad(true)
      setDataFetched(res.data)
    })
    .catch(err=>{
      setLoad(false)
      setDataFetched([])
      console.err(err)
    })
  },dep)

  return [load,dataFetched]
}