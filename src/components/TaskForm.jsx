import { useForm } from 'react-hook-form'
import { RiSave3Line } from 'react-icons/ri'
import { useTasks } from '../context/TasksContext'

import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
dayjs.extend(utc)

function TaskForm () {
  const { register, handleSubmit } = useForm()
  const { createTask } = useTasks()

  const onSubmit = handleSubmit((data) => {
    createTask({
      ...data,
      date: dayjs.utc(data.date).format()
    })
  })

  return (
    <form onSubmit={onSubmit} className='flex flex-col lg:flex-row lg:gap-8 lg:justify-between bg-secondary-900 py-4 px-4 rounded-lg'>
      <div className="w-full lg:w-1/2 ">
        <div className='flex flex-col gap-1 mb-4'>
          <label className='text-white text-xl font-bold capitalize'>
            Titulo de la tarea:
          </label>
          <input
            type='text'
            className='py-3 px-4 bg-[#D9D9D9] text-black text-base w-full outline-none rounded-lg'
            placeholder='Tengo que hacer mi tarea de ingles'
            {...register('title')}
            required
          />
        </div>
        <div className='flex flex-col gap-1 mb-4'>
          <label className='text-white text-xl font-bold capitalize'>
            descripcion de la tarea:
          </label>
          <textarea
            rows={4}
            required
            className='py-3 px-4 bg-[#D9D9D9] text-black text-base w-full outline-none rounded-lg'
            placeholder='Tengo que investigar sobre el verbo ToBe'
            {...register('description')}
          />
        </div>
      </div>
     <div className="grid grid-cols-1 grid-rows-1 gap-4 lg:flex lg:flex-col w-full lg:w-1/2  lg:justify-start justify-between">
       <div className='flex justify-between lg:flex-col flex-row gap-1'>
       <div className="flex flex-col gap-1 mb-4">
          <label className="text-white text-xl font-bold capitalize" htmlFor="category">categoria:</label>
          <select required {...register('category')} className="bg-[#D9D9D9] px-4 py-3 text-black text-base outline-none rounded-lg">
            <option className="w-full" value="Task">Tarea</option>
            <option value="Work">Trabajo</option>
            <option value="Study">Estudio</option>
            <option value="Daily">Diario</option>
          </select>
        </div>
        <div className='flex flex-col gap-1 '>
          <label className='text-white text-xl font-bold capitalize'>
            Fecha:
          </label>
          <input
            type='date'
            required
            className='py-3 px-4 bg-[#D9D9D9] text-black text-base w-full outline-none rounded-lg'
            {...register('date')}
          />
        </div>
        </div>
        <div className='w-full flex flex-col bg-red-600'>
          <button onClick={onSubmit} type='submit' className=' flex items-center justify-center gap-1 py-2 px-8 rounded-lg font-semibold bg-primary text-black ring-2 ring-black'>
            <RiSave3Line className='w-5 h-5 font-bold' />Guardar
          </button>
        </div>
     </div>
    </form>
  )
}

export default TaskForm
