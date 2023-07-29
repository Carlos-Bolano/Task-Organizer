import LoginForm from '../components/LoginForm'

function LoginPage () {
  return (
    <section className='p-10 flex flex-col lg:flex-row gap-8 items-center bg-white justify-center min-h-screen '>
      <img src="./../../public/LoginSvg.svg" alt="ilustracion"className=' max-w-xs'/>
      <LoginForm />
    </section>
  )
}

export default LoginPage
