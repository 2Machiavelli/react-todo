import { ITodo } from "@/types/todos.type"

const getTodoDate = (todo: ITodo): string => {
  const todoDate = new Date(todo.date)
  const minutes = todoDate.getMinutes()
  const updatedMinutes =  minutes >= 10 ? minutes : `0${ minutes }`

  return `${ todoDate.toLocaleDateString() } | ${ todoDate.getHours() }:${ updatedMinutes }`
}

export default getTodoDate