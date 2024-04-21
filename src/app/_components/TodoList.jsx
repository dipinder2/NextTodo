
export default function TodoList({tasks}) {
    return (
      <div>
           <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                    tasks.map(task=>{
                     return ( <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.text}</td>
                      </tr>)
                    })
                  }
                </tbody>
              </table>
            </div> 
      </div>
    );
  }
  