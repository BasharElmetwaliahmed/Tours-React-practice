import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);
  const removeTour=(id)=>{
    const newTours=tours.filter(tour=>{
      return tour.id!==id;
    })
    setTours(newTours);
  }
  const fetchData=async()=>{
    setLoading(true)
  try{
  const response=await fetch(url);
  const data=await response.json();
  setTours(data);
  setLoading(false)
  }
  catch{
    setLoading(false)
    alert("data not founded");
  }

  }
    useEffect(()=>{
   fetchData();
  },[])
  if(loading){
  return (
    <div className="App">
  <Loading></Loading>

    </div>
  );
}
if(tours.length==0){
  return(
    <div>
      <button className='refresh' onClick={()=>{fetchData()}}>Refresh</button>
    </div>
  )
}
else{
  return(
    <div className="App">
   <Tours data={tours} removeTours={removeTour}></Tours>
    </div>
)}
}


export default App;
