import React from "react"
import TabItem from "../../molecules/tab-item/tab-item"
import "./overview-tabs.scss"

const OverviewTabs = () => {
    return (
        <div role="tablist" aria-label="Overview Tabs" className="overview-tabs">
            <TabItem description="Orders received" count="23" />
            <TabItem description="In production" count="42" />
            <TabItem description="In transit" count="6" />
            <TabItem description="Arrived" count="6" />
            <TabItem description="Handed over" count="420" />
        </div>
    )
}

export default OverviewTabs