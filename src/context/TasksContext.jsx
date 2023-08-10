import { createContext, useContext, useState } from 'react'
import { 
  createTaskRequest,
  getTaskRequest, 
  getTasksRequest, 
  updateTaskRequest, 
  deleteTaskRequest 
} from '../api/tasks'

const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTask must be used within a TaskProvider')
  return context
}

export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState([])
   
  const getTasks = async () => {
    const res = await getTasksRequest()
    setTasks(res.data)
  }
  
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const createTask = async (task) => {
    const res = await createTaskRequest(task)
    return res
  }

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id)
      if (res.status === 204 && tasks.length > 1) setTasks(tasks.filter((task) => task.id !== id))
      if (res.status === 204 && tasks.length <= 1) getTasks()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        getTask,
        setTasks,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
