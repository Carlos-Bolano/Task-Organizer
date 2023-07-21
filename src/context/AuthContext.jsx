import { createContext, useContext, useEffect, useState } from 'react'
import { loginRequest, registerRequest } from '../api/auth'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context 
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAutenticated, setIsAutenticated] = useState(false)
  const [errors, setErrrors] = useState([])

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      setUser(res.data)
      setIsAutenticated(true)
    } catch (error) {
      setErrrors(error.response.data)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      console.log(res)
      // setUser(res.data)
      // setIsAutenticated(true)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrrors(error.response.data)
      }
      setErrrors([error.response.data.message])
    }
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrrors([])
      }, 5000)
      return () => clearTimeout(timer)  
    }
  }, [errors])

  return (
    <AuthContext.Provider value={{
      signup,
      signin,
      user,
      isAutenticated,
      errors
    }}>
      { children }
    </AuthContext.Provider>)
}
