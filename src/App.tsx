import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, handleCompletedParams, TodoTitle, type Todo, type TodoId } from "./types"
import { TODO_FILTERS } from "./const"
import { Footer } from "./components/Footer"
import Header from "./components/Header"


const mockTodos = [
  { id: "1", title: 'Todo 1', completed: false },
  { id: "2", title: 'Todo 2', completed: false },
  { id: "3", title: 'Todo 3', completed: false },
  { id: "4", title: 'Todo 4', completed: false },
  { id: "5", title: 'Todo 5', completed: true },
  { id: "6", title: 'Todo 6', completed: false },
  { id: "7", title: 'Todo 7', completed: false },
  { id: "8", title: 'Todo 8', completed: false },

]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: handleCompletedParams): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }
  //const todos = mockTodos
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  const handleClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  const addTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  //const completedCount = todos.filter((todo) => todo.completed).length
  return (
    <div className="todoapp">
      <Header onAddTodo={addTodo}/>
      <Todos onRemoveTodo={handleRemove} todos={filteredTodos} onToggleComplited={handleCompleted} />
      <Footer filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default App
