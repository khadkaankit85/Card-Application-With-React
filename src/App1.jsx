import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
//useState is used to change the data of the page without reloading,it basically updates the new state of data throughout app
  const [postData, setPostData] = useState([])

  //i  can use useEffect to fetch everytime page is rendered
  useEffect(()=>{

    //fetching data with async function
    const fetchData= async()=>{
      const url ="https://jsonplaceholder.typicode.com/posts"
      //await to wait for the data
     const data= await fetch(url)
     const finalData= await data.json()
     //setting the new state of data
     setPostData(finalData)
    }
    fetchData()
    
   
    //single bracket to fetch data only when the page is rendered for the first time
  },[])

return (
  
    <>
    <div className="body">
      {/* map is used like loop to iterate through data
      it maps the data and returns card for each data with respective probs */}
        {postData.map((data)=>{
          return <Card key={data.id} userId={data.userId} title={data.title} description={data.body} />
        })}
      </div>
    </>
  )
}

export default App
