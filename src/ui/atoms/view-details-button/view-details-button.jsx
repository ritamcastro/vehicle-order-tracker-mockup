import React from "react"
import { Link } from "react-router-dom"
import "./view-details-button.scss"

const ViewDetailsButton = ({ to }) => {

    return <div className="view-details-button">
        <Link className="sassy-link" to={to}>
            View details
    </Link>
    </div>
}

export default ViewDetailsButton
