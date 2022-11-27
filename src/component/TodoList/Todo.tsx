import React, {ChangeEvent, FC , useState } from 'react'
// functional component
import {ITask} from '../interfaces'
import TodoTask from './TodoTask'

const Todo:FC = () => {
  const [inputTodo, setInputTodo] = useState<string>('')
  //輸入型別在usestate，使用<>來標示
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])
  
  const handleChange =(event: ChangeEvent<HTMLInputElement>):void =>{
    //ChangeEvent需要稍微記憶一下，感覺是什麼特殊寫法
    //void function沒有任何回傳值

    if(event.target.name === 'inputTodo'){
      setInputTodo(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value))
    }
    
  }
  
  const addTodo =(): void=>{
    const newTask = {inputTodo :inputTodo , deadline :deadline}
    setTodoList([...todoList ,newTask])
    setInputTodo('') ;
    setDeadline(0) ;
    // console.log(todoList);
  }
  const deleteTodo =(taskNameToDelete:string):void=>{
    
    setTodoList(todoList.filter((task)=>{
      console.log(task.inputTodo,'////',taskNameToDelete);
      return task.inputTodo !== taskNameToDelete
    }))
  }

  return (
    <div className='todo-block'>

        <div>
          <div className='inputContainer'>
            <input type="text" placeholder='something...' name='inputTodo' onChange={handleChange} value ={inputTodo}/>
            <input type="number" placeholder='Days...' name='deadline' onChange={handleChange} value ={deadline}/>
          </div>
        <button onClick={addTodo}>Send</button>
        </div>
      <div>{todoList.map((task:ITask ,key:number)=>{
        return <TodoTask key={key} task={task} deleteTodo={deleteTodo} />
      })}</div>
    </div>
  )
}

export default Todo