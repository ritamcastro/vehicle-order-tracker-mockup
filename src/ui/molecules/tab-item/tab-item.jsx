import React from 'react'
import "./tab-item.scss"

export const TabItem = ({ description, count }) => {
    return (
        <div className="tab-item">
            <div className="count">
                {count}
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    )
}

export default TabItem
