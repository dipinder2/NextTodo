export default function Task({task}){
    return (<tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.text}</td>
        <td><input type="checkbox"/></td>
      </tr>)
}