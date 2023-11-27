import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {

  const todos = useSelector(state => state.todos)
  return (
    <>
    <div>
      Todos
    </div>
      {todos.map(todo => (
        <div key={todo.id} className='bg-gray-800 rounded border border-gray-700 focus:ring-2
        text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
          {todo.text}
        </div>
      ))}
    </>
    
  )
}

export default Todos
