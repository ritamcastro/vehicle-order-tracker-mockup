import React from 'react'
import "./order-status-tracker.scss"
import { TimelineItemCurrent, TimelineItem, TimelineItemLast } from './timeline-item/timeline-item'


export const OrderStatusTracker = () => {
    return (
        <div className="order-status-tracker">

            <div className="order-status-tracker-header">
                <p role="heading">Order status</p>
            </div>

            <div className="timeline">
                <TimelineItem description="Order received" date="Thu 24 Dec 2020 &middot; 15:30 PM" />
                <TimelineItem description="Schedulled for production" date="Thu 18 March 2021 &middot; 6:35 AM" />
                <TimelineItemCurrent description="In transit" date="Wed 24 March 2021 &middot; 2:00 PM" />
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