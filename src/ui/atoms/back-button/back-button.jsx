import React from "react"
import { useHistory } from "react-router-dom";

const BackButton = () => {

    const history = useHistory();

    const takeMePlaces = () => {
        history.goBack()
    }

    return (
        <button type="button" onClick={takeMePlaces} >
            Back
        </button >
    )
}

export default BackButton