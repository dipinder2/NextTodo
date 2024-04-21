const baseUrl = "http://localhost:3001"

export const getAllTodos = async () =>{
    const res =  await fetch(`${baseUrl}/tasks`, {cache:"no-store"})
    const todos = await res.json()
    return todos
}

export const addTodo = async (todo) =>{

    fetch(`${baseUrl}/tasks`,{
        method: "POST",
        body: JSON.stringify(todo),
        headers: 
        {
            "Content-Type": "application/json"
        }
    }).then(newItem=>res.json(newItem))
    .catch(error=>res.json({"err":"err"}))
}
export const deleteTodo = async (id) =>{

    fetch(`${baseUrl}/tasks/${id}`,{
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
}