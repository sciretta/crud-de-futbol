export default function handleDelete (URL,fetchData,item){
  fetch(URL, {
    method: 'DELETE',
    body:JSON.stringify(item),
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(fetchData(URL))
}