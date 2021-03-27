import React from "react"
import { format, isWednesday, parse } from "date-fns"

const FormattedDateLong = ({ value }) => {
    const parsedDate = parse(value, "yyyy-MM-dd", new Date())

    return <p>
        {format(parsedDate, "eeee d LLLL yyyy")}
    </p>

}

export default FormattedDateLong
