import React, { useState } from "react"
import FiltersButton from "../../molecules/filters-button/filters-button"
import OrderTable from "../../molecules/order-table/order-table"
import SearchBar from "../../molecules/search-bar/search-bar"

const OrdersList = () => {

    return (
        <div role="region" aria-label="Order list">
            <h1>All orders</h1>
            <SearchBar />
            <FiltersButton />

            <OrderTable />
        </div>
    )
}

export default OrdersList