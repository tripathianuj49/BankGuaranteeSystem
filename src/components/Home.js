import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users,setUsers]=useState([])

  useEffect(()=>{
    const fetchAllData=async()=>{
      try{
        const res=await axios.get("http://localhost:8000")
        console.log(res)
        setUsers(res.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchAllData()
  },[])
  return (
    <>
        <table>
            <thead>
            <tr>
                <th>GS_NO</th>
                <th>Processing Year</th>
                <th>BG_NO</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((curUser) => {
                    const {GS_NO,PROCESSING_YEAR,BG_NO } = curUser;
                    return (
                        <tr key={GS_NO}>
                            <td>{GS_NO}</td>
                            <td>{PROCESSING_YEAR}</td>
                            <td>{BG_NO}</td>
                            <td><button className='updatebtn'><Link to={`/update/${GS_NO}`}>Update</Link></button></td>
                        </tr>
                    )
                })

            }
            </tbody>
        </table>
    </>
  )
}
