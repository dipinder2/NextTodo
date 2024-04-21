const baseUrl = "http://localhost:3001"

export const getAllTodos = async () =>{
    const res =  await fetch(`${baseUrl}/tasks`, {cache:"no-store"})
    const todos = await res.json()
    return todos
}

export const addTodo = async (todo) =>{
    try{
        fetch(`${baseUrl}/tasks`,{
            method: "POST",
            body: JSON.stringify(todo),
            headers: 
            {
                "Content-Type": "application/json"
            }
        }).then()
        .catch(error=>res.json({"err":"401"}))
    }catch(e){
        res.status(401).send({"err":e.message})
    }

    const newTodo = await res.json()
    return newTodo
}