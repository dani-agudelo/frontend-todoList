import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm'
uuidv4()


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]) // va a ser una lista

  //* Agrega una tarea a la lista
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  //* Marca una tarea como completada o no completada
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //* Activa el modo de edición para una tarea
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  //* Actualiza la tarea con el nuevo valor editado
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }
  return (
    <div className='TodoWrapper'>
      <h1>¡Termina tus tareas!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} />
        )
      ))}
    </div>
  )
}
