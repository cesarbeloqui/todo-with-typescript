import { FilterValue, Todo } from "../types"
import { Filters } from "./Filters"

interface Props {
    onClearCompleted: () => void
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, onClearCompleted, completedCount = 0, filterSelected, handleFilterChange }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters
                filterSelected={ filterSelected}
                onFilterChange={handleFilterChange}

            />
            {completedCount > 0 && (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Borrar completados
                </button>
            )}
        </footer>
    )

}