import React from "react"
import OrdersList from "../../organisms/orders-list/orders-list"
import OverviewTabs from "../../organisms/overview-tabs/overview-tabs"

const Dashboard = () => {

    return (
        <div role="region" aria-label="Dashboard">
            <OverviewTabs />

            <OrdersList />
        </div>
    )
}

export default Dashboard
