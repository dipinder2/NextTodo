"use client"
import { createContext, useState } from "react";
import { getAllTodos } from "../../../apis/api";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import { useRouter } from "next/navigation";
export const MainContext = createContext()



export default function MainComponent({tasks}) {
  const [task,setTask] = useState({
    text:"",
    completed:false
  })
  const Router = useRouter()


  return (
    <main className={`max-w-4xl mx-auto mt-4 `}>
    <MainContext.Provider value={{task,setTask,Router}}>
      <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
        <TodoList tasks={tasks}/>
      </div>
    </MainContext.Provider>
    
    </main>
  );
}
