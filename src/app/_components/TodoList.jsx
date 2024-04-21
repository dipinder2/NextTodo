import Task from "./Task";

export default function TodoList({tasks}) {
    return (
      <div>
           <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Task</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                    tasks.map(task=> <Task task={task}/>)
                  }
                </tbody>
              </table>
            </div> 
      </div>
    );
  }
  