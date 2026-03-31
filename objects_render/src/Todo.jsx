import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function Todo(){

    // let [tasks, setTasks] = useState(["Sample task"]);//
    let [tasks, setTasks] = useState([{id:uuidv4(), task:"Sample task",isDone:false}]);//we can use an array of objects to store the tasks, because we can store the id of each task in the object, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks. we can use uuid library to generate unique id for each task, so that we can easily identify each task and perform operations like delete, update etc on the tasks.
    let [input, setInput] = useState("");

    let addTask = () => {
        // console.log("To ad new tasks");
        setTasks((prevTasks)=>{
            // return [...prevTasks, input]; when array used without key
            return [...prevTasks, {id:uuidv4(), task:input, isDone:false}]; //when array of objects used with key
        })
        setInput("");
         //we have to pass entire array to setTasks function, we cannot pass only the updated value of tasks array, because it will overwrite the entire array and we will lose the values of other tasks in the tasks array. so we have to pass the entire array with updated value of tasks array. we can use spread operator to create a new array with updated value of tasks array and other values of the tasks array, so that the address in memory will change and the component will re-render with updated value of tasks array and other values of the tasks array. we can use spread operator to create a new array with updated value of tasks array and other values of the tasks array, so that the address in memory will change and the component will re-render with updated value of tasks array and other values of the tasks array.    

   
    }

    let deleteTask = (id) => {
        setTasks((prevTasks)=>{
            return prevTasks.filter((task)=> task.id !== id);
        });
    }

    let updatettasks = (event) => {
        setInput(event.target.value);//component rerenders with updated value of input, but the value of tasks array is not updated, because we are not updating the state variable tasks, we are only updating the state variable input, so we have to update the state variable tasks to update the value of tasks array and re-render the component with updated value of tasks array. we can use spread operator to create a new array with updated value of tasks array and other values of the tasks array, so that the address in memory will change and the component will re-render with updated value of tasks array and other values of the tasks array. we can use spread operator to create a new array with updated value of tasks array and other values of the tasks array, so that the address in memory will change and the component will re-render with updated value of tasks array and other values of the tasks array.

    }

    // updating all elements in array

    let UpperCaseAll=()=>{
        setTasks((prevTasks)=>{
            return prevTasks.map((task)=>{
                return {...task, task: task.task.toUpperCase()};
            });
        });
    };

    let markalldone=()=>{
        setTasks((prevTasks)=>{
            return prevTasks.map((task)=>{
                return {...task, isDone: true};
            });
        });     
    };

    //update a specific element in the array
    
    let Casetoggle=(id)=>{
        setTasks((prevTasks)=>{
           return  prevTasks.map((task)=>{
                if(task.id === id){
                    return {
                        ...task, 
                        task: task.task === task.task.toUpperCase() ? task.task.toLowerCase(): task.task.toUpperCase()
                    };
                }else{
                    return task;

                }
            });
        });

    };  

    let markdone=(id)=>{
        setTasks((prevTasks)=>{
            return prevTasks.map(
                (task)=>{
                    if(task.id===id){
                        return {...task,isDone: !task.isDone};
                    }else{
                        return task;
                    }
                }
            );
        });
    }




    return (
        <div>

            <input placeholder="add a task" value={input} onChange={updatettasks} />
            <br />
            <button onClick={addTask}>Add task</button>
            <br></br>
            <br />
            <br />

            <h3>Todo List</h3>
            <ul>
                {/* {
                    tasks.map((task) => {
                        return <li>{task}</li>;
                    })
                } */
                
                tasks.map((task) => {
                    return  <li key={task.id}>
                    <span style={task.isDone ? {textDecoration:"line-through"} : {textDecoration:"none"}}>
                    {task.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTask(task.id)}>delete</button>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <button onClick={() => markdone(task.id)}>MarkDone</button>
                    &nbsp;&nbsp;&nbsp;                    
                    &nbsp;&nbsp;
                    <button onClick={() => Casetoggle(task.id)}>Toggle Case</button>
                    
                    </li>
                     
                })
                
                }
            </ul>


            <br></br>
            <br/>
            <button onClick={UpperCaseAll}>UpperCase All</button>
            <button onClick={()=> setTasks([])}>Clear All</button>
            <button onClick={markalldone}>Mark All Done</button>


        </div>
    )
}
