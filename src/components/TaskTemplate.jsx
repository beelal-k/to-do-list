import React from 'react'
import deleteTask from '../images/deleteTask.svg'
import '../css/TaskTemplate.css'

const TaskTemplate = ({ taskDesc, setTasks }) => {

    const removeTask = () => {
        setTasks(tasks => tasks.filter(task => task !== taskDesc));

    }

    let colorIndex = 0;
    const changeColor = () => {
        const arr = ["#7acf64", "#e74345", "#dfd762"];
        colorIndex += 1;
        if (!(colorIndex >= 3)) {
            document.getElementById(taskDesc + "Color").style.boxShadow = `0px 10px ${arr[colorIndex]}`;
            document.getElementById(taskDesc + "Color").style.border = `2px solid ${arr[colorIndex]}`;
        }
        else{
            colorIndex = 0;
            document.getElementById(taskDesc + "Color").style.boxShadow = `0px 10px ${arr[colorIndex]}`;
            document.getElementById(taskDesc + "Color").style.border = `2px solid ${arr[colorIndex]}`;
        }
    }



    return (
        <>
            <div className='task-template' id={taskDesc}>
                <p className='task-description' id={taskDesc + "Color"} onClick={changeColor}>{taskDesc}</p>
                <button className='task-btns task-delete-btn' onClick={removeTask}><img src={deleteTask} className="btn-icon-delete" alt="Icon for a delete button"/></button>

            </div>
        </>

    )
}

export default TaskTemplate