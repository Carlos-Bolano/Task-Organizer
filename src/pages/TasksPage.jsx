import { useState, useEffect } from 'react'
// import { RiFilterLine } from 'react-icons/ri'
import { useTasks } from '../context/TasksContext'
import Task from '../components/Task'
import NoTaskYet from '../components/NoTaskYet'

function TasksPage () {
  const { getTasks, tasks } = useTasks()
  const [selectedCategory, setSelectedCategory] = useState('')
  
  useEffect(() => {
    getTasks()
  }, []) 

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredTasks = selectedCategory
    ? tasks.filter(task => task.category === selectedCategory)
    : tasks

  function formatDate (date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
  }
  
  const date = new Date() 
  const formattedDate = formatDate(date)
  
  return (
    <section className='container mx-auto p-4 z-10'>
      <div className='flex flex-row justify-between items-end mt-4 mb-5 '>
        <div>
          <h3 className='text-[2.25rem] font-bold leading-10'>Mis Tareas</h3>
          <h4 className='text-[1.25rem] font-medium text-gray-400' >{formattedDate}</h4>
        </div>
        <select 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          className='py-2 px-4 rounded-lg font-semibold bg-secondary-900 text-white outline-black'
          > 
          <option value="">Todas</option>
          <option value='Tarea'>Tarea</option>
          <option value='Trabajo'>Trabajo</option>
          <option value='Estudio'>Estudio</option>
          <option value='Diarias'>Diaria</option>
        </select>
      </div>
      <div className='flex flex-col gap-4'>
      {filteredTasks.length === 0 && <NoTaskYet />}
        {filteredTasks.map(task => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default TasksPage
