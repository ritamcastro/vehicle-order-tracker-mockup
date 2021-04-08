import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getOrderDetails } from "../../../services/get-orders"
import "./order-summary.scss"

const OrderSummary = () => {
    const params = useParams()

    const [order, setOrder] = useState()

    useEffect(() => {
        setOrder(getOrderDetails(params.orderId))
    }, [])

    return (
        <div role="region" aria-label="Order details" className="order-summary">
            <div role="heading" className="order-summary-header">
                Order details
            </div>

            <If condition={order && order.name}>
                <table>
                    <tbody>
                        <tr>
                            <td>Status</td>
                            <td>{order.status}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{order.model}</td>
                        </tr>
                        <tr>
                            <td>Colour</td>
                            <td>{order.colour}</td>
                        </tr>
                        <tr>
                            <td>Order date</td>
                            <td>{order.orderDate}</td>
                        </tr>
                        <tr>
                            <td>Build date</td>
                            <td>{order.buildDate}</td>
                        </tr>
                    </tbody>
                </table>
            </If>
        </div>
    )
}

export default OrderSummary
{/* name: "Jane Doe",
                model: "Golf GTI",
                colour: "red",
                orderDate: getNWeeksAgo(dateString1, 16),
                buildDate: getNWeeksAgo(dateString1, 4),
                arrivalDate: dateString1,
                status: "on time", */}