import React from 'react'

const Login = () => {
    
    const [email,setemail] = useState("")

 
    const [password,setpassword] = useState("")

    

    const handlesubmmit = ()=>{
        const payload = {
            email,password
        }
        fetch("https://sleepy-lion-purse.cyclic.app/users/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"

            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        
        })
        .catch(err=>console.log(err))


       
        setemail("")
       
        setpassword("")
        

    }
  return (
    <div>
    <h3>Registation form</h3>
    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder=''/>
    <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder=''/>
    {/* <input type="text" value={ismarried} onChange={(e)=>setismarried(e.target.value)} placeholder=''/> */}
    <button onClick={handlesubmmit}>Log Up</button>
    </div>
  )
}

export default Login