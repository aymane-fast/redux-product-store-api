
import Carte from "./components/carte";
import Task from "./components/task";
import Addtask from "./components/Addtask";
import { useState } from "react";


function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'task1', description: 'faire la task1', completed: false },
    { id: 2, title: 'task2', description: 'faire la task2', completed: false },
    { id: 3, title: 'task3', description: 'faire la task3', completed: true },
  ]);
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  function handelDelete(id){   


    // console.log(id)

    const updatedTask  = tasks.filter(task  =>task.id !== id)
    setTasks(updatedTask)

  }
  return (

  <div className="App" >

   <Task tasks={tasks} handelDelete={handelDelete}/>  
   <Addtask tasks={tasks}  addTask={addTask} /> 

  </div>
  );
}

export default App;
