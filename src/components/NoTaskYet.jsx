import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NoTaskYet () {
  return (
    <article className='flex flex-col items-center justify-center pt-8 max-w-sm mx-auto'>
      <h1 className='text-3xl font-bold mb-8 text-secondary-900'>No tienes tareas aun</h1>
      <img src='../../public/notTaskYet.svg' className='w-full h-full mb-8' />
      <div className=''>
        <Link
          to={'/add-task'}
          className='flex items-center gap-1 py-2 px-8 rounded-lg font-semibold text-white bg-black ring-2 ring-black hover:bg-primary hover:text-black transition-colors duration-300'
        >
          <BiAddToQueue className='w-5 h-5 font-bold' /> Crear Tarea
        </Link>
      </div>
    </article>
  )
}

export default NoTaskYet
