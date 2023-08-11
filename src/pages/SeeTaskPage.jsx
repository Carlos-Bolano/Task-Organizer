import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTasks } from '../context/TasksContext'
import SeeTask from '../components/seeTask'

function SeeTaskPage () {
  const params = useParams()
  const { getTask } = useTasks()
  const [task, setTask] = useState({
    _id: '',
    title: '',
    description: '',
    date: '',
    category: ''
  })
 
  useEffect(() => {
    const loadTask = async () => {
      const task = await getTask(params.id)
      setTask(task)
    }
    loadTask()
  }, [])
  return (
    <section className='container mx-auto p-4'>
     <SeeTask task={task} />
    </section>
  )
}

export default SeeTaskPage
