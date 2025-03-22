import { useEffect, useState } from "react"
// import { users } from "./users"
function Dashboard(){
    const [quote, setQuote] = useState()
    const [change,setChange] = useState("")
    useEffect(()=>{
    
        async function fetchQuotes(){
            const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const res = await response.json();

  setQuote(res.data.content)

} catch (error) {
  console.error(error);
} 
        }


        fetchQuotes()
    
    },[change])
return(
    <>
<h1>Quote:{quote}</h1>

<button onClick={()=> setChange("change it")}>Change</button>
{/* <button onClick={set}>change</button> */}
       </>
)
}

export default Dashboard