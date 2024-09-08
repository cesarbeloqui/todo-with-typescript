import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}


const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        saveTodo({ title: inputValue })
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                placeholder="¿Qué quieres hacer?"
                onChange={(e) => { setInputValue(e.target.value) }}
                autoFocus
            />
        </form>
    )
}
export default CreateTodo