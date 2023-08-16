import { createContext, useContext, useEffect, useState } from 'react'
import { logOutRequest, loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'

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
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      if (res.status === 200) {
        setUser(res.data)
        setIsAutenticated(true)
      }
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data.message)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      setUser(res.data)
      setIsAutenticated(true)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    await logOutRequest()
    setUser(null)
    setIsAutenticated(false)
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer)  
    }
  }, [errors])

  useEffect(() => {
    async function checkLogin () {
      const res = await verifyTokenRequest()

      if (res.data === false) {
        setIsAutenticated(false)
        setLoading(false)
        return setUser(null)
      }

      if (res.data?.token) {
        setIsAutenticated(true)
        setUser(res.data)
        setLoading(false)
      }
    }
    checkLogin()
  }  
  , [])

  return (
    <AuthContext.Provider value={{
      signup,
      signin,
      logout,
      user,
      isAutenticated,
      errors,
      loading
    }}>
      { children }
    </AuthContext.Provider>)
}
