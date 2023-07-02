import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function View() {


  const[gsno,setGsno]=useState("");
  const GS_NO=gsno;
  const navigate=useNavigate()
  const handleChange=(e)=>{setGsno(e.target.value)}
  const onSubmits=async e =>{
    e.preventDefault();
    
    try{
      await axios.get("http://localhost:8000/details/"+GS_NO,gsno)
      navigate("/details/"+GS_NO)
    }catch(err){
      console.log(err);
    }    
}
  
  return (
    <>
      
      <form onSubmit={onSubmits}>
        <div>
          <label htmlFor="GS_NO" >GS_NO</label>
        </div>
        <div>
          <input type="text" GS_NO name="gsno" value={gsno} onChange={handleChange} />
        </div>
        <div>
          <input type="submit" value="Submit"/>    
        </div>
      </form>
    </>
  )
}