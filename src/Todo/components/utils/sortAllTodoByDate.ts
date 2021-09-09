import { ITodo } from "@/Todo/types"

const sortAllTodoByDate = (todos: ITodo[]): ITodo[] => {
  const sortedTodos = [...todos]
  return sortedTodos.sort((a: ITodo, b: ITodo) =>  b.date - a.date)
}

export default sortAllTodoByDate