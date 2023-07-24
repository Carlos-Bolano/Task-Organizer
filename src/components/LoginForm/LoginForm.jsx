import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
// Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

function LoginForm () {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit } = useForm()
  const { signin, errors } = useAuth()

  const onSubmit = handleSubmit(async (values) => {
    signin(values)
  })

  return (
      <section className='w-auto'>
        <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-secondary-900 mb-8'>
          Iniciar <span className='text-primary'>sesión</span>
        </h1>
        {errors.map((error, index) => (
          <div className='mb-4 bg-red-500 p-4' key={index}>{error}</div>
        ))}
        <form 
         onSubmit={onSubmit} 
        className='mb-8'>
          <div className='relative mb-4'>
            <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input
              type='email'
              required
              className='py-3 pl-8 pr-4 bg-secondary-900 text-gray-100 w-full outline-none rounded-lg'
              placeholder='Correo electrónico'
              {...register('email', { required: true })} 
            />
          </div>
          <div className='relative mb-4'>
            <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              className='py-3 px-8 bg-secondary-900 text-gray-100  w-full outline-none rounded-lg'
              placeholder='Contraseña'
              {...register('password', { required: true })} 
            />
            { showPassword ? ( 
            <RiEyeOffLine className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
              />
            )}
          </div>
        
            <button
              type='submit'
              className='bg-primary text-secondary-900 uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'
            >
              Ingresar
            </button>
    
        </form>
        <div className='flex flex-col items-center gap-4'>
          <span className='flex items-center text-secondary-900 font-medium gap-2'>
            ¿No tienes cuenta?
            <Link
              to='/register'
              className='text-primary hover:text-gray-900 transition-colors'
            >
              Registrate
            </Link>
          </span>
        </div>
      </section>

  )
}

export default LoginForm
