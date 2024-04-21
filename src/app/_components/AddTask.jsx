"use client"
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { addTodo } from "../../../apis/api";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask() {
    const [task,setTask] = useState({
      text:""
    })
   function handleChange(e){
      e.preventDefault()
      const {name,value} = e.target
      setTask({...task,[name]:value})
      return
    }
    async function handleSubmit(e){
      e.preventDefault()
      await setTask({...task, ["id"]:uuidv4()})
      console.log(task)
      addTodo(task)
      return
    }
    return (
      <div className={`max-w-4xl mx-auto mt-4 `}>
        <form>
          <input name="text" size="20" placeholder="task" onChange={e=>handleChange(e)} type="text"/>
        </form>
<br/>
       <button onClick={handleSubmit} className="btn btn-primary w-full">
            Add new Task
            <AiOutlinePlus size={30}/>
        </button>
      </div>
    );
  }
  