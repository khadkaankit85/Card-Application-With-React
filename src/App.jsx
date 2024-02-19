import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
    //UseState to change the state of data according to the value of data
    const [datas, setdatas] = useState([]) //empty list to initialise it as a list.

    //to fetch data once the page is rendered or on the first render we use useEffect
    //it is of diff type , one for first render, another for every render and another for specific render
    useEffect(()=>{
        try{
        const url='https://jsonplaceholder.typicode.com/posts' //url of api
        //let's make a function to fetch data
        //sometimes promise might not be rejected so in that case we have to catch the error
        
        const fetchData= async ()=>{ // have to make it async because api can be slow sometimes so gotta wait for the response
            const response =await fetch(url) // await to wait for the data, wait until the promise above is resolves
            const data = await response.json() //to jsonify data
            setdatas(data) //the state of data changes once the data is received from api
           
            if (!response.ok){
                console.log(`data fetching  error ${response.status}`)
            }
            
        }
        //calling the function
        fetchData()}
        catch(error){
            console.log(" Something happend: "+ error) //gonnna print the error in console in case of failure
        }
    
    },[])

return (
  
    <>
    <div className="body">
    {/* to add data in application I am using map which iterates through the list of data */}
    {datas.map((data)=>{
        return <Card key={data.id} userId={data.userId} description={data.body} title={data.title} /> //key is compulsory to map the data, to return required element according to mapped data 
        // i have passed props according to the props on card component in Card.jsx
   
   })}
    </div>
    </>
  )
}

export default App

//everything is working as expected