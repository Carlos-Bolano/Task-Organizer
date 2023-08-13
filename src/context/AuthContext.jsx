import { createContext, useContext, useEffect, useState } from 'react'
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context 
}

// Función para obtener el valor de una cookie por su nombre
function getCookieValue(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null; // Retorna null si no se encontró la cookie
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAutenticated, setIsAutenticated] = useState(false)
  const [errors, setErrrors] = useState([])
  const [loading, setLoading] = useState(true)

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
      setUser(res.data)
      setIsAutenticated(true)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrrors(error.response.data)
      }
      setErrrors([error.response.data.message])
    }
  }

  const logout = () => {
    Cookies.remove('token')
    setUser(null)
    setIsAutenticated(false)
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrrors([])
      }, 5000)
      return () => clearTimeout(timer)  
    }
  }, [errors])

  useEffect(() => {
    async function checkLogin () {
      const tokenFromCookie = getCookieValue('token');

      if (!tokenFromCookie) {
        setIsAutenticated(false)
        setLoading(false)
        return setUser(null)
      }
      try {
        const res = await verifyTokenRequest(tokenFromCookie)

        if (!res.data) {
          setIsAutenticated(false) 
          setLoading(false)
          return
        }     

        setUser(res.data)
        setIsAutenticated(true)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setIsAutenticated(false)
        setLoading(false)
        setUser(null)
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
