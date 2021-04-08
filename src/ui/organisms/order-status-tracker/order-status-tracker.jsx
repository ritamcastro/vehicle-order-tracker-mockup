import React from 'react'
import "./order-status-tracker.scss"
import PastStatus from './past-status/past-status'
import LastStatus from './last-status/last-status'
import CurrentStatus from "./current-status/current-status"
import PastStatusJustDash from "./past-status-just-dash/past-status-just-dash"
import { TimelineItemCurrent, TimelineItem, TimelineItemLast } from './timeline-item/timeline-item'


export const OrderStatusTracker = () => {
    return (
        <div className="order-status-tracker">

            <div className="tracker-header">
                <p role="heading">Order status</p>
            </div>

            <div className="timeline">
                <TimelineItem description="Order received" date="24 Jan 2021" />
                <TimelineItem description="Schedulled for production" date="02 Feb 2021" />
                <TimelineItemCurrent description="In transit" date="05 Feb 2021" />
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
                <TimelineItem />
                <TimelineItemLast />

            </div>

        </div >
    )
}

export default OrderStatusTracker