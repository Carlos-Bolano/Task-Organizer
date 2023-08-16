import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useTasks } from '../context/TasksContext'

function SeeTask ({ task }) {
  const { title, description, date, category, _id } = task
  const navigate = useNavigate()
  const { deleteTask, getTasks } = useTasks()

  const onClick = (id) => {
    deleteTask(id)
    navigate('/tasks')
    getTasks()
  }

  return (
    <article className='rounded-xl shadow-2xl bg-white overflow-hidden mt-8'>
      <img
        src='https://tecnosoluciones.com/wp-content/uploads/2020/11/Cabecera.jpg'
        alt=''
        className='h-52 w-full object-cover rounded-xl'
      />
      <div className='p-8 flex md:flex-row flex-col gap-8 justify-between'>
        <div className='flex flex-col justify-between gap-4'>
          <h2 className='font-bold text-2xl capitalize'>{title}</h2>
          <p className='text-lg  leading-6 text-gray-800 mb-4'>{description}</p>
         <div className='max-w-max rounded-full bg-blue-600 py-1 px-4 text-white font-normal '>
         <span>{category}</span>
         </div>
        </div>
        <div className='flex md:flex-col items-center md:items-end  justify-between'>
          
          <div className='flex items-center gap-4'>
            <Link
              to={`/update-task/${_id}`}
              className='flex flex-row items-center gap-2 p-3 bg-black text-white rounded-full hover:bg-gray-800 duration-300'
              >
              <FaPen />
            </Link>
            <button
              className='flex flex-row items-center gap-2  p-3 bg-red-600 text-white rounded-full hover:bg-red-400 duration-300'
              onClick={() => { onClick(_id) }}
            >
              <MdDelete />
            </button>
          </div>
          <span className='text-sm font-medium text-gray-800'>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </article>
  )
}

export default SeeTask
