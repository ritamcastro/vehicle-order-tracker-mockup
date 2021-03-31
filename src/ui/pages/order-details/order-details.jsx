import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getOrderDetails } from "../../../services/get-orders"
import BackButton from "../../atoms/back-button/back-button"

const OrderDetails = () => {
    const params = useParams()

    const [order, setOrder] = useState()

    useEffect(() => {
        setOrder(getOrderDetails(params.orderId))
    }, [])

    return (
        <div role="region" aria-label="Order details">
            <BackButton />
            <OrderSummary order={order} />
            <OrderStatusTracker order={order} />
        </div>
    )
}

export default OrderDetails
