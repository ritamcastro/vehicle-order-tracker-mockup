import React from "react"
import "./filters-button.scss"

const FiltersButton = () => {
    return (
        <div aria-label="Filter orders" className="filters-button">
            <img src="/assets/icons/24-px-filter.svg" />
            Filter (0)

        </div>
    )
}

export default FiltersButton