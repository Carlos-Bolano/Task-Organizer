import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../context/TasksContext'

function Task ({ task }) {
  const { title, description, category, date, state, _id } = task
  const [isTaskDone, setIsTaskDone] = useState(state)
  const { updateTask } = useTasks()

  const handleTaskDone = () => {
    setIsTaskDone(!isTaskDone)
    updateTask(_id, { ...task, state: !isTaskDone })
  }

  const TruncatedText = ({ text, maxLength }) => {
    const truncated = text.length > maxLength ? text.substring(0, maxLength) + '...' : text
    return truncated
  }
  // Text to small screen 
  const titleTruncatedSm = TruncatedText({ text: title, maxLength: 39 })
  const descriptionTruncatedSm = TruncatedText({ text: description, maxLength: 40 })
  // Text to medium screen
  const titleTruncatedMd = TruncatedText({ text: title, maxLength: 59 })
  const descriptionTruncatedMd = TruncatedText({ text: description, maxLength: 130 })
  // Text to large screen
  const titleTruncatedLg = TruncatedText({ text: title, maxLength: 59 })
  const descriptionTruncatedLg = TruncatedText({ text: description, maxLength: 130 })

  return (
    <article className=' max-w-[750px] p-4 gap-4 flex justify-between bg-white rounded-2xl drop-shadow-2xl'>
      <div className='flex justify-between items-center gap-4'>
        {isTaskDone ? (<button onClick={handleTaskDone} className='flex items-center justify-center rounded-full p-4 bg-green-500 transition-colors duration-300'>
          <img src='/isDone.svg' alt='chulo' className='w-5 max-w-min' /> 
          </button>) : (<button onClick={handleTaskDone} className='flex items-center justify-center rounded-full p-4 bg-gray-300  transition-colors duration-300'>
          <img src='/isDone.svg' alt='chulo' className='w-5 max-w-min' />
          </button>)}
   
        <Link to={`/tasks/${_id}`}>
          <h2 className='font-bold text-lg leading-5 lg:hidden md:hidden sm:block'>{titleTruncatedSm}</h2>
          <h2 className='font-bold text-lg leading-5 md:block hidden lg:hidden'>{titleTruncatedMd}</h2>
          <h2 className='font-bold text-lg leading-5 hidden md:hidden lg:block'>{titleTruncatedLg}</h2>

          <p className='font-normal leading-5 mt-1 text-base lg:hidden md:hidden'>{descriptionTruncatedSm}</p>
          <p className='font-normal leading-5 mt-1 text-base md:block hidden lg:hidden'>{descriptionTruncatedMd}</p>
          <p className='font-normal leading-5 mt-1 text-base hidden md:hidden lg:block'>{descriptionTruncatedLg}</p>

        </Link>
      </div>
      <div className='flex justify-between items-end flex-col'>
        { category === 'Tarea' && <span className='rounded-full text-center bg-violet-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
         { category === 'Trabajo' && <span className='rounded-full text-center bg-green-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
         { category === 'Estudio' && <span className='rounded-full text-center bg-blue-600 py-1 px-3 text-white text-xs'>{ category }</span> 
        }
         { category === 'Diarias' && <span className='rounded-full text-center bg-primary py-1 px-3 text-white text-xs'>{ category }</span> 
        }
        <span className='text-sm text-gray-500'>{ new Date(date).toLocaleDateString() }</span>
      </div>
    </article>
  )
}

export default Task
