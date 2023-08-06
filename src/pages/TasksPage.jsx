import React, { useEffect } from 'react'
import { RiFilterLine } from 'react-icons/ri'
import { useTasks } from '../context/TasksContext'
import Task from '../components/Task'
import NoTaskYet from '../components/NoTaskYet'

function TasksPage () {
  const { getTasks, tasks } = useTasks()
  useEffect(() => {
    getTasks()
  }, [])  
  return (
    <div className='container mx-auto p-4 z-10'>
      <div className='flex flex-row justify-between items-end mt-4 mb-5 '>
        <div>
          <h3 className='text-[2.25rem] font-bold leading-10'>Mis Tareas</h3>
          <h4 className='text-[1.25rem] font-medium text-gray-400' >{new Date().toDateString()}</h4>
        </div>
        <button className='flex items-center gap-1 py-2 px-8 rounded-lg font-semibold bg-secondary-900 text-white ring-2 ring-black hover:bg-primary hover:text-black transition-colors duration-300'>
         <RiFilterLine className='w-5 h-5 font-bold' /> Filtrar
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        {
          tasks.length === 0 && <NoTaskYet />
        }
        {
          tasks.map(task => (<Task key={task._id} task={task}/>))
        }
      </div>
    </div>
  )
}

export default TasksPage
