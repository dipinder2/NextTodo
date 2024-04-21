import { AiOutlinePlus } from "react-icons/ai";

export default function AddTask() {
    return (
      <div className={`max-w-4xl mx-auto mt-4 `}>
       <button className="btn btn-primary w-full">
            Add new Task
            <AiOutlinePlus size={30}/>
        </button>
        
      </div>
    );
  }
  