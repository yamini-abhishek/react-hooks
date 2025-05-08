import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Posts = () => {
   const [data,setData]=useState([])
   const [loading,setLoading]=useState(true)
   const [message,setMessage]=useState("");

   const fetchData=()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                setData(response.data);
                console.log(response.data);
                setLoading(false);

            }).catch((error)=>{
                setMessage('Error occured while loading data',error)
                setLoading(false)
            })
   }
   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div>
        <h2>post</h2>
        <div className="container">
        {
          data.map((item)=>(
            <div className="post" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
          ))  
        }
        </div>
       
      
    </div>
  )
}

export default Posts
