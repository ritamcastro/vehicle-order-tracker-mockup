import React from "react"
import { useHistory } from "react-router-dom";
import "./back-button.scss"
const BackButton = () => {

    const history = useHistory();

    const takeMePlaces = () => {
        history.goBack()
    }

    return (
        <button type="button" onClick={takeMePlaces} className="back-button">
            Back
        </button >
    )
}

export default BackButton