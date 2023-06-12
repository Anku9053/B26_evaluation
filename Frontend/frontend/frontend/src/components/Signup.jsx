import React, { useState } from 'react'

const Signup = () => {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")

    const [gender,setgender] = useState("")

    const [password,setpassword] = useState("")

    const [age,setage] = useState("")

    const [city,setcity] = useState("")

    const [ismarried,setismarried] = useState("")

    const handlesubmmit = ()=>{
        const payload = {
            name,email,gender,password,age,city,ismarried
        }
        fetch("https://sleepy-lion-purse.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"

            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))


        setname("")
        setemail("")
        setgender("")
        setpassword("")
        setage("")
        setcity("")
        setismarried("")

    }
  return (
    <div>
    <h3>Registation form</h3>
    <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder=''/>
    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder=''/>
    <input type="text" value={gender} onChange={(e)=>setgender(e.target.value)} placeholder=''/>
    <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder=''/>
    <input type="text" value={age} onChange={(e)=>setage(e.target.value)} placeholder=''/>
    <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} placeholder=''/>
    <input type="text" value={ismarried} onChange={(e)=>setismarried(e.target.value)} placeholder=''/>
    <button onClick={handlesubmmit}>Sign Up</button>
    </div>
  )
}

export default Signup