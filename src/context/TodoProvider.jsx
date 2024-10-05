import React, { createContext } from 'react'


export const TodoContext=createContext()


const TodoProvider = ({children}) => {
  return (
    <TodoContext.Provider value={{}}>
      
    </TodoContext.Provider>
  )
}

export default TodoProvider