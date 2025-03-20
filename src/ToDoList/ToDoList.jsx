import React, {useState} from 'react'
import styles from './ToDoList.module.css'

function ToDoList(){

    const [tasks, setTasks] = useState(['Eat Breakfast', 'Take a shower', 'Walk for 30mins'])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() != ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
        else{
            alert("Enter Task to add")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element,i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        const updatedTasks = [...tasks]
        if (index > 0){
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        const updatedTasks = [...tasks]
        if (index < tasks.length-1){
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(<div className={styles.ToDoListComponent}>
            <h1>To Do List</h1>
            <div className={styles.InputField}>    
                <input 
                    type='text' 
                    placeholder='Enter Task' 
                    value={newTask} 
                    onChange={handleInputChange}
                />
                <button className={styles.AddButton} onClick={addTask}>Add</button>
            </div>
                <div className={styles.ListItems}>
                <ol>
                    {
                        tasks.map((task, index) => 
                        <li key={index}>
                            <span >{task}</span>
                            <button className={styles.MoveButtonUp} onClick={() => moveTaskUp(index)}>👆</button>
                            <button className={styles.MoveButtonDown} onClick={() => moveTaskDown(index)}>👇</button>
                            <button className={styles.DeleteButton} onClick={() => deleteTask(index)}>Delete</button>
                        </li>

                        )
                    }
                </ol>
                </div>
            </div>)
}

export default ToDoList