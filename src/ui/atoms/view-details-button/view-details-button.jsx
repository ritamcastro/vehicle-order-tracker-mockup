import React from "react"
import { Link } from "react-router-dom"

const ViewDetailsButton = ({ to }) => {

    return <Link to={to}>
        View details
    </Link>
}

export default ViewDetailsButton
