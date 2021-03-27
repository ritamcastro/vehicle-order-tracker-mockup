import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getOrderDetails } from "../../../services/get-orders"

const OrderSummary = () => {
    const params = useParams()

    const [order, setOrder] = useState()

    useEffect(() => {
        setOrder(getOrderDetails(params.orderId))
    }, [])

    return (
        <div role="region" aria-label="Order details">
            <h1>
                These are the order details
            </h1>
            <p>
                {order && order.name}
            </p>
        </div>
    )
}

export default OrderSummary