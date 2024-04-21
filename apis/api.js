const baseUrl = "http://localhost:3001"

export const getAllTodos = async () =>{
    const res =  await fetch(`${baseUrl}/tasks`, {cache:"no-store"})
    const todos = await res.json()
    return todos
}

export const addTodo = async (todo) =>{

    const newItem = await fetch(`${baseUrl}/tasks`,{
        method: "POST",
        body: JSON.stringify(todo),
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
    return newItem
}
export const deleteTodo = async (id) =>{

    return fetch(`${baseUrl}/tasks/${id}`,{
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
}
export const updateTodo = async (id) =>{
    fetch(`${baseUrl}/tasks/${id}`,{
        method: "PATCH",
        body:JSON.stringify({
            "id":id,
            "completed":true,
        })
        ,
        headers: 
        {
            "Content-Type": "application/json"
        }
    },{cache:"no-store"})

}