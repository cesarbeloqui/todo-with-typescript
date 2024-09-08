import { FILTERS_BUTTONS } from "../const"
import { FilterValue } from "../types"



interface Props {
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue) => void
}


export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    const handleClick = (filter: FilterValue) => (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault()
        onFilterChange(filter)
    }
    // const handleClick = (filter: FilterValue) => () => {
    //     onFilterChange(filter)
    // } // otra forma de hacerlo
    return (
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                const isSelected = key === filterSelected
                const className = isSelected ? 'selected' : ''
                return (
                    <li key={`filter-${key}`}>
                        <a
                            href={href}
                            className={className}
                            onClick={handleClick(key as FilterValue)}
                        >
                            {literal}
                        </a>
                    </li>
                )
            })}
        </ul>
    )

}