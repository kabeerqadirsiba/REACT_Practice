import Button from "./Button"
import Dashboard from "./Dashboard"
import Component from "./Component"
// import React from "react"
function App(){
  const user = {
    name:'kaleem',
    cast:'shar',
    isLoggedin:false
  }
  return(
<>
{/* <Button color={'yellow'} handlerFunction={()=> alert("clicked")} name={'Login'} /> */}
{/* <Button color={'red'} handlerFunction={()=> alert("clicked")} name={'signup'} />

<Button color={'blue'} handlerFunction={()=> alert("clicked")} name={'Login'} />

<Button color={'white'} handlerFunction={()=> alert("clicked")} name={'Login'} /> */}

{user && <h1>user found</h1>}

{/* {user.isLoggedin? (
<Dashboard username={user.name}/>
):(
<h1>login first</h1>
)} */}
<Component/>
</>
  )
}


export default App