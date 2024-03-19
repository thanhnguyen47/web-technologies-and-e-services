import './App.css';
import axios from 'axios';
import { useEffect, useMemo,useState } from 'react';
function Element({data}){
  const {id,name,phone,username,website,email,address,company} = data;
  console.log(data);
  return(
    <div className='Element'>
      <div><span>Id:</span> {id}</div>
      <div><span>Name:</span> {name}</div>
      <div><span>Phone number:</span> {phone}</div>
      <div><span>Username:</span> {username}</div>
      <div><span>Website:</span> {website}</div>
      <div><span>Email:</span> {email}</div>
      <div><span>Address: </span>{`${address.city} ${address.street} ${address.suite} $${address.zipcode}`}</div>
      <div><span>Company: </span>{`${company.name} ${company.bs} ${company.catchPhrase}`}</div>
    </div>

  )
}
export default function App(){
  const [dataset,setDataset]=useState();
  
  useEffect(()=>{
    const fetch = async()=>{
      const data = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(data.data||"");
      setDataset(data.data);
    }
    fetch();
  },[]);
  const [id,setid]=useState(0);
  const next = ()=>{
    if(id<dataset.length-1)setid(prev=>prev+1);
  }
  const back = ()=>{
    if(id>0)setid(prev=>prev-1);
  }

  return (
    <div className='container'>

    {dataset?<Element data = {dataset[id]}/>:""}
      <button onClick={back} style = {{marginLeft:"60%"}}>Back</button>
      <button onClick={next}>Next</button>
    </div>

  )
}