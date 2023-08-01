import { Link } from 'react-router-dom'

function Task ({ title, description, category, time, isDone }) {
  return (
    <Link
      to={'/task/:id'}
      className=' max-w-[750px] p-4 flex items-center justify-between bg-white rounded-2xl drop-shadow-2xl'
    >
      <div className='flex justify-between items-center gap-4'>
        {isDone ? (<span className='flex items-center justify-center rounded-full p-4 bg-green-500'>
          <img src='/isDone.svg' alt='chulo' className='w-5' /> 
          </span>) : (<span className='flex items-center justify-center rounded-full p-4 bg-gray-300'>
          <img src='/isDone.svg' alt='chulo' className='w-5' />
          </span>)}
   
        <div>
          <h2 className='font-bold text-lg leading-5'>{title}</h2>
          <p className=' max-w-sm font-normal leading-5 mt-1 text-[.875rem]'>
           {description}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-end gap-8 justify-between min-w-max '>
          <span className='rounded-full bg-blue-600 py-1 px-3 text-white text-xs'>{category}</span>
          <span className='text-sm font-medium text-black'>{time}</span>
      </div>
    </Link>
  )
}

export default Task
