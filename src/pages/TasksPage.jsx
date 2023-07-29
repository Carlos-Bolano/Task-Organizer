import React from 'react'
import { RiFilterLine } from 'react-icons/ri'

function TasksPage () {
  return (
    <div className='container mx-auto p-4 z-10'>
      <div className='flex flex-row justify-between items-end mt-4 mb-5'>
        <div>
          <h3 className='text-[2.25rem] font-bold leading-10'>My Tasks</h3>
          <h4 className='text-[1.25rem] font-medium text-gray-400' >April 14 , 2023</h4>
        </div>
        <button className=' bg-secondary-900 text-white text-xl py-2 px-4 rounded-2xl'>
         <span className='flex flex-row items-center justify-center gap-1'>
         <RiFilterLine />
         Filter 
         </span>
        </button>
      </div>
      <div className='flex flex-col gap-4'>
           
      </div>
    </div>
  )
}

export default TasksPage
