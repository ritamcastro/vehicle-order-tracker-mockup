import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getOrderDetails } from "../../../services/get-orders"
import BackButton from "../../atoms/back-button/back-button"
import OrderStatusTracker from "../../organisms/order-status-tracker/order-status-tracker"
import OrderSummary from "../../organisms/order-summary/order-summary"
import "./order-details.scss"

const OrderDetails = () => {
    const params = useParams()

    const [order, setOrder] = useState()

    useEffect(() => {
        setOrder(getOrderDetails(params.orderId))
    }, [])

    return (
        <div role="region" aria-label="Order details" className="order-details">

            <div className="order-details-header">
                <BackButton />
                <h1>{order && order.name}'s Order</h1>
            </div>
            <div className="order-details-content">
                <OrderSummary order={order} />
                <OrderStatusTracker order={order} />
            </div>
        </div>
    )
}

export default OrderDetails
