import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Todos = () => {
      const [todos,setTodos]=useState({})
      const [id,setId]=useState("");

      const fetchData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/'+id).then((res)=>{
            console.log(res.data)
            setTodos(res.data)
        }).catch((error)=>{
            console.log(error)
        })

      };

      useEffect(()=>{
        fetchData();
      },[])

      const handleSubmit=(event)=>{
        event.preventDefault();
        fetchData();
      }
  return (
    <div className='container'>
        <form action="" onSubmit={handleSubmit} className="form-area">
            <h2>Enter ToDo Id:</h2>
            <input type="text" name="" id="" value={id} onChange={(e)=>{
                setId(e.target.value)
            }} />
            <button type='submit'>Show</button>
        </form>

        <div className="tododata">
            <p>Todo Id:{id}</p>
            <p>User id:{todos.userId}</p>
            <p>Title: {todos.title}</p>
            <p>completed: {todos.completed}</p>

        </div>
      
    </div>
  )
}

export default Todos
