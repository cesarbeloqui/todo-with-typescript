import { TodoTitle } from "../types"
import CreateTodo from "./CreateTodo"

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}


const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>todos <img style={{ width: '60px', height: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/450px-Typescript_logo_2020.svg.png" alt="TypeScript" /></h1>
            <CreateTodo saveTodo={onAddTodo} /> {/* Pasamos la función onAddTodo como prop al componente CreateTodo */}
        </header>

    )
}
export default Header