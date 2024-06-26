import { RiMenuFill, RiCloseLine } from 'react-icons/ri'
import { BiLogOutCircle, BiTask, BiAddToQueue } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import ImageUser from '../assets/user-default.png'

export default function Navbar () {
  const { user, logout } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className='fixed border-b-4 bg-[#f3f3f1] border-gray-300 container mx-auto py-4 z-50 '>
      <nav className='flex justify-between flex-row items-center px-4 gap-4'>
        <div className='flex items-center gap-[6px] min-w-max '>
          <img
            src={ImageUser}
            alt={`foto de ${user.username}`}
            className='w-12 h-12 rounded-full object-cover border-2 border-secondary-100'
          />
          <div>
            <h6 className='text-xl mb-1 font-bold capitalize'>{user.username}</h6>
            <p className='text-sm -mt-2 font-medium text-gris capitalize'>{user.ocupation} </p>
          </div>
        </div>
        <div className={`bg-[#D9D9D9]/80 backdrop-blur-sm lg:bg-transparent transition-all duration-300 ease-in-out fixed w-[75%] h-full ${showMenu ? '-left-0' : '-left-full'} bottom-0 lg:static flex flex-col lg:flex-row items-center justify-between p-12 lg:p-0 lg:max-w-max `}>

          <div className='flex flex-col lg:flex-row gap-4 max-w-max lg:mr-16'>
            <Link
              to={'/'}
              className='flex items-center gap-1 py-2 px-8 rounded-lg font-semibold text-secondary-900 bg-white ring-2 ring-secondary-900 hover:bg-secondary-900 hover:text-white transition-colors duration-300'
            >
              <BiTask className='w-5 h-5 font-bold' />
              Tareas
            </Link>
            <Link
              to={'/add-task'}
              className='flex items-center gap-1 py-2 px-8 rounded-lg font-semibold text-white bg-secondary-900 ring-2 ring-secondary-900 hover:bg-primary hover:text-secondary-900 transition-colors duration-300'
            >
              <BiAddToQueue className='w-5 h-5 font-bold' /> Crear Tarea
            </Link>
          </div>
          <button onClick={logout} className='flex items-center gap-1 py-2 px-8 rounded-lg font-semibold text-secondary-900 bg-white ring-2 ring-secondary-900 hover:bg-secondary-900 hover:text-white transition-colors duration-300'>
            <BiLogOutCircle className='w-5 h-5 font-bold' /> Cerrar Sesion
          </button>

        </div>
        {
          showMenu ? (<button className='lg:hidden text-4xl font-bold' onClick={handleMenu}>
          <RiCloseLine /> 
          </button>) : (
            <button className='lg:hidden text-4xl font-bold' onClick={handleMenu}>
            <RiMenuFill /> 
            </button>
          )
        }
      </nav>
    </header>
  )
}
