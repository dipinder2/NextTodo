import { getAllTodos } from "../../apis/api";
import MainComponent from "./_components/MainComponent";

export default async function Home() {


  const tasks = await getAllTodos()
  console.log(tasks)

  return (
    <main className={`max-w-4xl mx-auto mt-4 `}>
      <div className="text-center my-5 flex flex-col gap-4">
        <MainComponent tasks={tasks}/>
      </div>
    
    
    </main>
  );
}
