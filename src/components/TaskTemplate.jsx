import React from 'react'
import deleteTask from '../images/deleteTask.svg'
import '../css/TaskTemplate.css'

const TaskTemplate = ({ taskDesc, setTasks, tasks }) => {

    const removeTask = async () => {
        setTasks(tasks => tasks.filter(task => task !== taskDesc));
        // let index = tasks.indexOf(taskDesc)
        // console.log(index)
        // setTasks(task => task.slice(index));
        localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task !== taskDesc)))
        let temp = localStorage.getItem('tasks')
        console.log(temp)
    }

    let colorIndex = 0;
    const changeColor = () => {
        const colors = ["#7acf64", "#e74345", "#dfd762"];
        const shadowColors = ["#5ea04d", "#aa3436", "#aca54a"]
        colorIndex += 1;
        if (!(colorIndex >= 3)) {
            document.getElementById(taskDesc + "Color").style.boxShadow = `0px 10px ${shadowColors[colorIndex]}`;
            document.getElementById(taskDesc + "Color").style.border = `2px solid ${colors[colorIndex]}`;
        }
        else {
            colorIndex = 0;
            document.getElementById(taskDesc + "Color").style.boxShadow = `0px 10px ${shadowColors[colorIndex]}`;
            document.getElementById(taskDesc + "Color").style.border = `2px solid ${colors[colorIndex]}`;
        }
    }



    return (
        <>
            <div className='task-template' id={taskDesc}>
                <p className='task-description' id={taskDesc + "Color"} onClick={changeColor}>{taskDesc}</p>
                <button className='task-btns task-delete-btn' onClick={removeTask}><img src={deleteTask} className="btn-icon-delete" alt="Icon for a delete button" /></button>

            </div>
        </>

    )
}

export default TaskTemplate