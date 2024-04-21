'use client'
import { useState } from "react";
import { deleteTodo } from "../../../apis/api"
import { useRouter } from "next/navigation";
export default async function Task({task}){
  const Router = useRouter()
  const [checked,setChecked] = useState(false)
  async function handleDelete(e){
    e.preventDefault()
    deleteTodo(task.id)
    await setChecked(true)
    console.log(checked)
    Router.refresh()
  }


    return (<tr key={task.id}>
        <td>{task.text}</td>
        <td><input type="checkbox" checked={checked} onChange={handleDelete}/></td>
      </tr>)
}