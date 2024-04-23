"use client"
import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useState } from "react";
import { addTodo } from "../../../apis/api";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import { MainContext } from "./MainComponent";

export default function AddTask() {
  const {task,setTask,Router} = useContext(MainContext)
   
  function handleChange(e){
      e.preventDefault()
      const {name,value} = e.target
      setTask({...task,[name]:value})
      return
    }
    async function handleSubmit(e){
      e.preventDefault()
      let id = await uuidv4().toString()
      if(task.text=="")return
      await setTask({...task, ["id"]:id,["completed"]:false})
      await addTodo(task)
      setTask({text:"", completed:false})
      Router.refresh()
      return
    }
    return (
      <div className={`max-w-4xl mx-auto mt-4 `}>
        <form>
          <input name="text" size="20" value={task.text} placeholder="task" onChange={e=>handleChange(e)} type="text"/>
        </form>
<br/>
       <button onClick={handleSubmit} className="btn btn-lg btn-ghost">
            Add new Task
            <AiOutlinePlus size={30}/>
        </button>
      </div>
    );
  }
  