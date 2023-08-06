import { useState } from 'react'
import { Link } from 'react-router-dom'

function Task ({ task }) {
  const { title, description, category, date, state, _id } = task
  const [isTaskDone, setIsTaskDone] = useState(state)
  return (
    <article className=' max-w-[750px] p-4 gap-4 flex justify-between bg-white rounded-2xl drop-shadow-2xl'>
      <div className='flex justify-between items-center gap-4'>
        {isTaskDone ? (<button onClick={() => setIsTaskDone(!isTaskDone)} className='flex items-center justify-center rounded-full p-4 bg-green-500'>
          <img src='/isDone.svg' alt='chulo' className='w-5 max-w-min' /> 
          </button>) : (<button onClick={() => setIsTaskDone(!isTaskDone)} className='flex items-center justify-center rounded-full p-4 bg-gray-300'>
          <img src='/isDone.svg' alt='chulo' className='w-5 max-w-min' />
          </button>)}
   
        <Link to={`/tasks/${_id}`}>
          <h2 className='font-bold capitalize text-lg leading-5'>{title}</h2>
          <p className='  font-normal leading-5 mt-1 text-base'>
           {description}
          </p>
        </Link>
      </div>
      <div className='flex justify-between items-end flex-col'>
        { category === 'Task' && <span className='rounded-full text-center bg-slate-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
         { category === 'Work' && <span className='rounded-full text-center bg-green-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
         { category === 'Study' && <span className='rounded-full text-center bg-blue-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
         { category === 'Daily' && <span className='rounded-full text-center bg-yellow-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
        <span className='text-sm text-gray-500'>{ new Date(date).toLocaleDateString() }</span>
      </div>
    </article>
  )
}

export default Task
