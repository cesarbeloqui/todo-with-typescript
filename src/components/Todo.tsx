import { handleCompletedParams, TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleComplited: ({ id, completed }: handleCompletedParams) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleComplited }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleComplited({ id, completed: event.target.checked })
    }
    return (
        <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={handleChangeCheckbox} />
            <label>{title}</label>
            <button className="destroy" onClick={() => {
                onRemoveTodo({ id })
            }}></button>
        </div>
    )
}