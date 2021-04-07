import React from "react"
import OrdersList from "../../organisms/orders-list/orders-list"
import OverviewTabs from "../../organisms/overview-tabs/overview-tabs"
import "./dashboard.scss"

const Dashboard = () => {

    return (
        <div role="region" aria-label="Dashboard" className="dashboard">
            <OverviewTabs />

            <OrdersList />
        </div>
    )
}

export default Dashboard
