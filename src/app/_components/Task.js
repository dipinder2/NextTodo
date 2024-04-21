"use client"
import {updateTodo } from "../../../apis/api"
import { useRouter } from "next/navigation";
export default async function Task({task}){
  const Router = useRouter()
  function handleDelete(e){
    e.preventDefault()
    updateTodo(task.id.toString())
    Router.refresh()
  }


    return (<tr key={task.id}>
        <td 
        className={task.completed==true?"line-through":""}>
          {task.text}</td>
        <td><input type="checkbox" 
         onChange={handleDelete} checked={task.completed==true?true:false} disable={task.completed?true:false}/></td>
      </tr>)
}