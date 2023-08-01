import TaskForm from '../components/TaskForm'

function TasksFormPage () {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-row items-center justify-between mt-4 mb-5'>
        <h3 className='text-[2.25rem] font-bold leading-10'>Crear Tarea</h3>
      </div>
      <TaskForm />
    </div>
  )
}

export default TasksFormPage
