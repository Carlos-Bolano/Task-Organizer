import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/authPages/RegisterPage'
import LoginPage from './pages/authPages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <AuthProvider>
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>tasks</h1>} />
        <Route path="/tasks/:id" element={<h1>update task</h1>} />
        <Route path="/add-task" element={<h1>create task</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
