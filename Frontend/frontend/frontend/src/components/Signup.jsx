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
    <div>Signup</div>
  )
}

export default Signup