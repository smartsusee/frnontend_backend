import React, { useState } from 'react'
import {API_URL} from '../constance/URL'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Create() {

    const[firstname,setfirstname]=useState('')
    const[lastname,setlastname]=useState('')
    const[checked,setchecked]=useState(false)

    const navigate =useNavigate();

  let post_data =async()=>{

    await axios.post(API_URL,{

      firstname,
      lastname,
      checked,
     
    })

    alert("login success")

    navigate('/read')   
  }

  return (
    <>    <div>create operation</div>
   
<br/>
    <label>firstname:</label>
    <input type='text' value={firstname}  onChange={e=>setfirstname(e.target.value)}/>
    <br/>
    <br/>

    <label>lastname:</label>
    <input type='text' value={lastname} onChange={e=>setlastname(e.target.value)}/>
<br/>
<br/>
    <label>checked:</label>
    <input type='checked' value={checked} onChange={()=>setchecked(!checked)}/>




  
    <br/>
    <br/>
    

<button onClick={post_data}>submit</button>

</>

  )
}

export default Create