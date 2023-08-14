import LoginForm from '../components/LoginForm'
import ImageLogin from '../assets/LoginSvg.svg'

function LoginPage () {
  return (
    <section className='p-10 flex flex-col lg:flex-row gap-8 items-center bg-white justify-center min-h-screen '>
      <img src={ImageLogin} alt="ilustracion" className=' max-w-xs'/>
      <LoginForm />
    </section>
  )
}

export default LoginPage
