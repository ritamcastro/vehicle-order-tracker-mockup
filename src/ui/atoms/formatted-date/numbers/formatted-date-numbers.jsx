import React from "react"
import { format, parse } from "date-fns"

const FormattedDateNumbers = ({ value }) => {
    const parsedDate = parse(value, "yyyy-MM-dd", new Date())

    return <p>
        {format(parsedDate, "dd/MM/yyyy")}
    </p>

}

export default FormattedDateNumbers
