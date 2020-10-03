const findPlayerData = () =>{
  return {
    nombre:document.getElementById('nombreJug').value,
    apellido:document.getElementById('apellido').value,
    edad:document.getElementById('edad').value,
    equipo:document.getElementById('equipo').value
  }
}

const findTeamData = () =>{
  return {
    nombre:document.getElementById('nombreEq').value,
    pais:document.getElementById('pais').value
  }
}

const hasData = data =>{
  const filter = Object.values(data).filter(item=>item!=="")
  if(filter.length===Object.keys(data).length){
    return true
  }else{
    return false
  }
}

const fetchPost = (URL,data,fetchData) => {
  fetch(URL, {
    method: 'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(fetchData(URL))
}

const resetPlayerValues = () =>{
  document.getElementById('nombreJug').value=""
  document.getElementById('apellido').value=""
  document.getElementById('edad').value=""
  document.getElementById('equipo').value=""
}

const resetTeamValues = () =>{
  document.getElementById('nombreEq').value=""
  document.getElementById('pais').value=""
}

export default function handleSubmit(type=null,setError,URL,fetchData,selects={}){
  if(type==='PLAYER'){
    const data = {...findPlayerData(),...selects}
    if(hasData(data)){
      fetchPost(URL,data,fetchData)
      resetPlayerValues()
    }else{
      setError(true)
      setTimeout(()=>setError(false),1000)
    }
  }else if(type==='TEAM'){
    const data = {...findTeamData(),...selects}
    if(hasData(data)){
      fetchPost(URL,data,fetchData)
      resetTeamValues()
    }else{
      setError(true)
      setTimeout(()=>setError(false),1000)
    }
  }
}
