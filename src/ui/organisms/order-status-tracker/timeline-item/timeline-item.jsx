import React from "react"
import { InProductionIcon } from "../../../atoms/icons/progress-icons"
import "./timeline-item.scss"

export const TimelineItem = ({ description, date }) => {
    return (
        <div className="timeline-item" >
            <div className="status-indicator">
                {description && date ?
                    <div className="marker" />
                    : null
                }
                <div className="dash" />
            </div>
            <div className="description">
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export const TimelineItemCurrent = ({ description, date }) => {
    return (
        <div className="timeline-item" >
            <div className="status-indicator">
                <div className="icon">
                    <InProductionIcon />
                </div>
            </div>
            <div className="description boldme">
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}



export const TimelineItemLast = () => {
    return (
        <div className="timeline-item" >
            <div className="status-indicator">
                <div className="marker" />
            </div>
        </div>
    )
}


// const TimelineItem = ({description, date}) => {
//     return (
//         <div className="timeline-item" >
//             <div className="status-indicator">
//                 <Choose>
//                     <When condition={description && current === false}>
//                         <div className="marker-filled" />
//                         <div className="dash" />
//                     </When>

//                     <When condition={description && current}>
//                         <div className="marker-icon" />

//                     </When>

//                 </Choose>
//             </div>
//             <div className="description">
//                 <p>{description}</p>
//                 <p>{date}</p>
//             </div>
//         </div>
//     )
// }
