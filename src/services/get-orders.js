import { format, subWeeks, addWeeks, parse } from 'date-fns'

const dateString1 = format(addWeeks(new Date(), 1), "yyyy-MM-dd")
const dateString2 = format(addWeeks(new Date(), 15), "yyyy-MM-dd")
const dateString3 = format(addWeeks(new Date(), 6), "yyyy-MM-dd")


const getNWeeksAgo = (dateString, nrWeeks) => {
    const parsedDate = parse(dateString, "yyyy-MM-dd", new Date())

    return format(subWeeks(parsedDate, nrWeeks), "yyyy-MM-dd")
}

export const getOrders = () => {
    return [
        {
            id: 1,
            name: "Jane Doe",
            vehicle: "Golf GTI",
            status: "On time",
            progress: "In production",
            arrivalDate: dateString1,
        },
        {
            id: 2,
            name: "Dana Scully",
            vehicle: "ID.3",
            status: "Delayed",
            progress: "Order received",
            arrivalDate: dateString2,
        },
        {
            id: 3,
            name: "Fox Mulder",
            vehicle: "T-Roc",
            status: "Early",
            progress: "In transit",
            arrivalDate: dateString3,
        }
    ]
}

export const getOrderDetails = (orderId) => {

    switch (orderId) {
        case "1":
            return {
                name: "Jane Doe",
                model: "Golf GTI",
                colour: "red",
                orderDate: getNWeeksAgo(dateString1, 16),
                buildDate: getNWeeksAgo(dateString1, 4),
                arrivalDate: dateString1,
                status: "on time",
            }
        case "2":
            return {
                name: "Dana Scully",
                model: "ID.3",
                colour: "grey",
                orderDate: getNWeeksAgo(dateString2, 20),
                buildDate: getNWeeksAgo(dateString2, 6),
                arrivalDate: dateString2,
                status: "delayed",
            }

        case "3":
            return {
                name: "Fox Mulder",
                model: "T-Roc",
                colour: "midnight",
                orderDate: getNWeeksAgo(dateString3, 24),
                buildDate: getNWeeksAgo(dateString3, 2),
                arrivalDate: dateString3,
                status: "on time",
            }
        default:
            console.log("Ops, no such order");
    }
}