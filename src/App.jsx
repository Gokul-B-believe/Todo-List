import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(["Eat the Food", "Go to Gym", "Take a Shower"]);
  const [newtask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value)

  }

  const add = () => {
    if (newtask.trim() !== "") {
      setTasks(t => [...t, newtask]);
      setNewTask("")
    }
  }

  const deletee = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }
  const move = (index) => {
    const updatedVal = [...tasks];
    if (index > 0) {
      [updatedVal[index], updatedVal[index - 1]] = [updatedVal[index - 1], updatedVal[index]];
      setTasks(updatedVal)
    }
  }
  const down = (index) => {
    const updatedVal = [...tasks];
    if (index < tasks.length - 1) {
      [updatedVal[index], updatedVal[index - 1]] = [updatedVal[index - 1], updatedVal[index]];
      setTasks(updatedVal)
    }
  }
  return (
    <>
      <div className='todo'>
        <h1>ToDo</h1>
        <input
          type='text'
          placeholder='Enter the text...'
          onChange={handleChange}
        />
        <button className='add-btn' onClick={add}>Add</button>

        <ol>
          {tasks.map((tasks, index) =>
            <li key={index}>
              <span>{tasks}</span>
              <button className='delete-btn' onClick={() => deletee(index)}>Delete</button>
              <button className='move-btn' onClick={() => move(index)}>Move</button>
              <button className='down-btn' onClick={() => down(index)}>Down</button>
            </li >)
          }
        </ol >

      </div >
    </>
  )
}

export default App
