import React, {FC} from 'react'
import Header from './component/Header/Header'
import Todo from './component/TodoList/Todo' 
import Chart from './component/DashBoader/Chart'

const App:FC = () => {
  return (
    <div>
      <Header></Header>
      <Todo></Todo>
      <Chart></Chart>
    </div>
  )
}

export default App
