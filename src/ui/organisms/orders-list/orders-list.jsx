import React from "react"
import FiltersButton from "../../molecules/filters-button/filters-button"
import OrdersTable from "../../molecules/orders-table/orders-table"
import SearchBar from "../../molecules/search-bar/search-bar"
import "./orders-list.scss"

const OrdersList = () => {

    return (
        <div role="region" aria-label="Order list" className="orders-list">
            <div className="taskbar">
                <h1>All orders</h1>
                <SearchBar />
                <FiltersButton />
            </div>

            <OrdersTable />

        </div>
    )
}

export default OrdersList