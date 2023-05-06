import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { API_URL } from '../constance/URL';

function Read() {

    const[ApiData,setApidata] =useState([])





    let CallgetApi =async()=>{
   
       const res = await axios.get(API_URL,)

       console.log(res.data);
       setApidata(res.data)
   
    }

    useEffect(()=>{

       CallgetApi()

    },[])

  return (
  <>
     
     <table>
      
      <tr>
      
      <th>FirstName</th>
      <th>Lastname</th>
      {/* <th>c hecked</th> */}

      </tr>

     {ApiData.map(data=>( 

<tr key={data.id}>
      
<td>{data.firstname}</td>
<td>{data.lastname}</td>   


</tr>


     ))}
     
     </table>


  </>
  )
}

export default Read