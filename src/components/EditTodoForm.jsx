import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task}) => {
  const [value, setValue] = useState(task.task) // se pone que no sea un valor por defecto para que al editar veamos qué había

  const handleSubmit = e => {
    e.preventDefault()

    editTodo(value, task.id)

    setValue("") // para borrar y poner una nueva tarea
  }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input'
        value={value}
        placeholder='Editar tarea' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Editar
      </button>
    </form>
  )
}
