import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

function ProtectedRoute () {
  const { isAutenticated, loading } = useAuth()
  if (loading) return <h1 className='text-center text-primary text-3xl'>Loading...</h1>
  if (!loading && !isAutenticated) return <Navigate to='/login' replace = {true} />
  return (
    <Outlet />
  )
}

export default ProtectedRoute
