import React, {FC} from 'react'
import Header from './component/Header/Header'
import Todo from './component/TodoList/Todo' 

const App:FC = () => {
  return (
    <div>
      <Header></Header>
      <Todo></Todo>
    </div>
  )
}

export default App
