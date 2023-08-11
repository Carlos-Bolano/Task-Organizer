import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const layoutHome = () => {
  return (
    <main className='container mx-auto'>
      <Navbar />
      <div className='pt-[80px]'>
        <div className='max-w-[750px]'>
          <Outlet />
        </div>
        <div className=''>
          {/* PROXIMAMENTE SE AGREGARAN LOS COMPONENTES DE LA PÁGINA HOME */}
        </div>
      </div>
    </main>
  )
}

export default layoutHome
