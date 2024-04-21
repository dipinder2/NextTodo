"use client"
import {deleteTodo, updateTodo } from "../../../apis/api"
import { useRouter } from "next/navigation";
export default async function Task({task}){
  const Router = useRouter()
  function handleComplete(e){
    e.preventDefault()
    if(task.completed){
      return
    }
    updateTodo(task.id.toString())
    Router.refresh()
  }
  function handleDelete(e){
    e.preventDefault()
    deleteTodo(task.id)
    Router.refresh()
  }

    return (<tr key={task.id}>
        <td 
        className={task.completed==true?"line-through":""}>
          {task.text}</td>
        <td><input type="checkbox" 
         onChange={handleComplete} 
         checked={task.completed==true?true:false} 
         disable={task.completed}/></td>
        <td><button 
        on onClick={handleDelete} className="btn btn-sm btn-error">del</button></td>
        
      </tr>)
}