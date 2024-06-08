import { useState } from "react";



export default function Addtask({addTask,tasks}){

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Completed, setCompleted] = useState(false)
    
function submitForm(e){
    e.preventDefault();


    const newTask = {
        id: tasks.length + 1 ,
        title : Title,
        description: Description,
        completed : Completed,
    };
    
     addTask(newTask)
     
     // Clear form fields after submission
     setTitle('');
     setDescription('');
     setCompleted(false);

     console.log("New Task Added:", newTask);
  
}

    return(
        <div>
            <form onSubmit={submitForm}>
                task title 
                <input type="text" onChange={(e)=>setTitle(e.target.value)} /><br/>
                task description 
                <input type="text" onChange={(e)=>setDescription(e.target.value)}/><br/>

                completed
                <select onChange={(e)=>setCompleted(e.target.value)}>
                    <option value={true}>true</option>
                    <option value={false}>false</option>
                    {/* {console.log(Completed)} */}
                </select>

                <button type="submit">add task</button>
                

            </form>
        </div>
    )
}