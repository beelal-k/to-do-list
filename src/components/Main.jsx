import React, { useEffect, useState } from 'react'
import '../css/Main.css'
import TaskTemplate from './TaskTemplate'


const Main = () => {
  const [tasks, setTasks] = useState(["Your task's will look like this", "You can click the tasks to change color"]);
  const [taskDesc, setTaskDesc] = useState('');
  // console.log(tasks)

  const createTask = async () => {
    setTasks(task => [...task, taskDesc]);
    document.getElementById('searchBar').value = "";
    localStorage.setItem("tasks", JSON.stringify([...tasks, taskDesc]));
  }

  useEffect(() => {
    localStorage.getItem('tasks', tasks);
    // let todos = JSON.parse(localStorage.getItem('tasks'));
    // setTasks(todos);

  }, [])


  return (
    <>
      <h1>To Do List</h1>
      <main className='main-parent'>
        <div className='main-child'>
          <input type="text" placeholder='Create a new task' className='search-bar' id="searchBar" onKeyDown={(e) => e.keyCode === 13 ? createTask() : null} onChange={(e) => setTaskDesc(e.target.value)} />
          {
            tasks.length <= 0 ? <p className='no-tasks'>Seem&apos;s like there&apos;s nothing to do...</p>
              :
              tasks.map(task => {
                return (
                  <TaskTemplate taskDesc={task} setTasks={setTasks} tasks={tasks} />
                )
              })
          }

        </div>
        <div className='contact-section'>
          <h2>Contact me</h2>
          <p>Email: bilalk.dev@gmail.com</p>
          <p>Source code: <a href='https://github.com/beelal-k/to-do-list.git'>https://github.com/beelal-k/to-do-list.git</a></p>
        </div>
      </main>


    </>

  )
}

export default Main;