import React, { useState } from 'react'
import '../css/Main.css'
import TaskTemplate from './TaskTemplate'


const Main = () => {
  const [tasks, setTasks] = useState(['Ok']);
  const [taskDesc, setTaskDesc] = useState('');

  const createTask = () => {
    setTasks(task => [...task, taskDesc]);
    document.getElementById('searchBar').value = "";

  }

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
                  <TaskTemplate taskDesc={task} setTasks={setTasks} />
                )
              })
          }

        </div>
      </main>


    </>

  )
}

export default Main;