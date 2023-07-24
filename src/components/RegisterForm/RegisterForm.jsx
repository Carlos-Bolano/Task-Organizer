import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
// Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from 'react-icons/ri'

function RegisterForm () {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit } = useForm()
  const { signup, isAutenticated, errors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAutenticated) navigate('/tasks')
  }, [isAutenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values)
  })

  return (
      <section className='w-auto'>
        <h1 className='text-3xl text-center uppercase font-bold tracking-[.3em] text-secondary-900 mb-8'>
          Crear <span className='text-primary'>cuenta</span>
        </h1>
        {errors.map((error, index) => (
          <div className='mb-4 bg-red-500 p-4' key={index}>{error}</div>
        ))}
        <form 
          onSubmit={onSubmit} 
          className='mb-8'>
          <div className='relative mb-4'>
            <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />

            <input
              type='text'
              required
              className='py-3 pl-8 pr-4 bg-secondary-900 text-gray-100 w-full outline-none rounded-lg'
              placeholder='Nombre de usuario'
              {...register('username', { required: true })} 
            />

          </div>
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
              className='py-3 px-8 bg-secondary-900 text-gray-100 w-full outline-none rounded-lg'
              placeholder='Contraseña'
              {...register('password', { required: true })} 
            />
            
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
              />
            )}
            
          </div>
          <div>
            <button
              type='submit'
              className='bg-primary text-secondary-900 uppercase font-bold text-sm w-full py-3 px-4 rounded-lg'
            >
              Registrarme
            </button>
          </div>
        </form>
        <span className=' text-secondary-900 flex items-center justify-center gap-2'>
          ¿Ya tienes cuenta?
          <Link
            to='/login'
            className='text-primary font-medium hover:text-gray-900 transition-colors'
          >
            Ingresa
          </Link>
        </span>
      </section>
  )
}

export default RegisterForm
