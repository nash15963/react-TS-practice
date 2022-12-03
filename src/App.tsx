import React, {FC} from 'react'
import Header from './component/Header/Header'
import Todo from './component/TodoList/Todo' 
import Chart from './component/DashBoader/Chart'
import Count from './component/Count/Count'

const App:FC = () => {
  return (
    <div>
      <Header></Header>
      <Todo></Todo>
      <Chart></Chart>
      <Count></Count>
    </div>
  )
}

export default App
