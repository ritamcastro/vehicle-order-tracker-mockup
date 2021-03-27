import React, { useEffect, useMemo, useState } from "react"
import { getOrders } from "../../../services/get-orders"
import FormattedDateNumbers from "../../atoms/formatted-date/numbers/formatted-date-numbers"
import ViewDetailsButton from "../../atoms/view-details-button/view-details-button"

const OrderTable = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        setOrders(getOrders)
    }, [])

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

    // 'name' },
    // //         { Header: 'Vehicle', accessor: '' },
    // //         { Header: 'Status', accessor: '' },
    // //         { Header: 'Order Progress', accessor: '' },
    // //         { Header: 'Arrival date', accessor: '', Cell: DateCell },
    // //         { Header: 'Vehicle', accessor: '' },

    // return (
    //     <div role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="81">
    //         <div role="rowgroup">
    //             <div role="row">
    //                 <span role="columnheader" aria-sort="none">ARIA Role</span>
    //                 <span role="columnheader" aria-sort="none">Semantic Element</span>
    //             </div>
    //         </div>
    //         <div role="rowgroup">
    //             <div role="row" aria-rowindex="11">
    //                 <span role="cell">header</span>
    //                 <span role="cell">h1</span>
    //             </div>
    //             <div role="row" aria-rowindex="16">
    //                 <span role="cell">header</span>
    //                 <span role="cell">h6</span>
    //             </div>
    //             <div role="row" aria-rowindex="18">
    //                 <span role="cell">rowgroup</span>
    //                 <span role="cell">thead</span>
    //             </div>
    //             <div role="row" aria-rowindex="24">
    //                 <span role="cell">term</span>
    //                 <span role="cell">dt</span>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default OrderTable