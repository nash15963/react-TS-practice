import { ITask } from '../interfaces'

interface Props{
    task :ITask,
    deleteTodo(taskNameToDelete:string):void
}

const TodoTask = ({ task ,deleteTodo}:Props) => {
    // 從他的父代接受一個props（task={task}）,這裡要注意的是，要如何去定義型別的方法
    
  return (
    <div>
        {task.inputTodo} {task.deadline} times
        <button onClick={()=>{deleteTodo(task.inputTodo)}}>done</button>
    </div>
  )
}

export default TodoTask