import React, { useEffect, useState } from "react"
import { getOrders } from "../../../services/get-orders"
import FormattedDateNumbers from "../../atoms/formatted-date/numbers/formatted-date-numbers"
import ViewDetailsButton from "../../atoms/view-details-button/view-details-button"

const OrdersTable = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => setOrders(getOrders), [])

    return (
        <table aria-label="Orders list">
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Vehicle</th>
                    <th>Status</th>
                    <th>Order progress</th>
                    <th>Arrival date</th>
                    <th>Order details</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order =>
                        <tr key={order.id} aria-label={`${order.name}'s order`}>
                            <td>{order.name}</td>
                            <td>{order.vehicle}</td>
                            <td>{order.status}</td>
                            <td>{order.progress}</td>
                            <td><FormattedDateNumbers value={order.arrivalDate} /></td>
                            <td><ViewDetailsButton to={`/orders/${order.id}`} /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default OrdersTable

