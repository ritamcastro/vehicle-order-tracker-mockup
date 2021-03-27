import React from "react"
import { format, parse } from "date-fns"

const FormattedDateShort = ({ value }) => {
    const parsedDate = parse(value, "yyyy-MM-dd", new Date())

    return <p>
        {format(parsedDate, "eee d LLL yyyy")}
    </p>

}

export default FormattedDateShort
