import { Outlet } from 'react-router-dom'
// import Sidebar from '../components/Siderbar'
import Navbar from '../components/Navbar'

const layoutHome = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='pt-[80px]'>
        <div className='max-w-[750px]'>
          <Outlet />
        </div>
        <div className=''>
          {/* <Sidebar /> */}
        </div>
      </div>
    </div>
  )
}

export default layoutHome
