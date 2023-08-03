import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTasksRequest } from '../api/tasks'

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
    console.log(res.data)
  }

  const createTask = async (task) => {
    const newTask = {
      title: task.title,
      description: task.description,
      date: new Date(task.date).toISOString(),
      category: task.category
    }
  
    const res = await createTaskRequest(newTask)
    console.log(res)
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        setTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
