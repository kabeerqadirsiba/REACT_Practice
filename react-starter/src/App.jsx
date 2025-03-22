import Button from "./Button"
import Dashboard from "./Dashboard"
import Component from "./Component"
import { useState } from "react"
// import React from "react"
function App(){
const [username, setUsername] = useState("")
const [passsword, setPassword] = useState("")
const [department, setDapartment] = useState("")

const handleSubmit = (event) =>{
  event.preventDefault()
  if(passsword.length < 5){
    alert("kindly set password more than 5 characters")
    setUsername("")
    setPassword("")
    setDapartment("")
  }
  else{
    if(passsword === 'hassan'){
      console.log("you are authenticated user ")
      setUsername("")
      setPassword("")
      setDapartment("")
    }
    else{
      alert("wrong credientials")
    }
  }

}
  return(
<>
{/* <Button color={'yellow'} handlerFunction={()=> alert("clicked")} name={'Login'} /> */}
{/* <Button color={'red'} handlerFunction={()=> alert("clicked")} name={'signup'} />

<Button color={'blue'} handlerFunction={()=> alert("clicked")} name={'Login'} />

<Button color={'white'} handlerFunction={()=> alert("clicked")} name={'Login'} /> */}

{/* {user && <h1>user found</h1>} */}

{/* {user.isLoggedin? (
<Dashboard username={user.name}/>
):(
<h1>login first</h1>
)} */}
{/* <Component/> */}


{/* <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>

<form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "300px", gap: "10px"}}>
<input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} placeholder="username" />
<input type="password" value={passsword}  onChange={(event)=>setPassword(event.target.value)} placeholder="password" />
<input type="text" value={department}  onChange={(event)=>setDapartment(event.target.value)} placeholder="department" />
<button type="submit">Login</button>
</form>
</div> */}


<Dashboard/>
</>
  )
}


export default App