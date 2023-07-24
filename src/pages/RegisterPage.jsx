import RegisterForm from '../components/RegisterForm/RegisterForm'

function RegisterPage () {
  return (
    <div className='bg-white p-10 flex flex-col lg:flex-row gap-8 items-center justify-center min-h-screen'>
      <img src="./../../public/RegisterSvg.svg" alt="ilustracion"className=' max-w-xs'/>
      <RegisterForm/>
    </div>
  
  )
}

export default RegisterPage
