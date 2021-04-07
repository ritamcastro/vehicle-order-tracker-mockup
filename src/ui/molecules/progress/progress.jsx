import React from "react"
import { InProductionIcon, OrderReceivedIcon, InTransitIcon } from "../../atoms/icons/progress-icons"
import Text from "../../atoms/text/text"
import "./progress.scss"

const Progress = ({ orderProgress }) => {
    return (
        <div className="progress">
            <Choose>
                <When condition={orderProgress === "Order received"}>
                    <OrderReceivedIcon />
                </When>

                <When condition={orderProgress === "In production"}>
                    <InProductionIcon />
                </When>

                <When condition={orderProgress === "In transit"}>
                    <InTransitIcon />
                </When>
                <Otherwise>
                    {null}
                </Otherwise>
            </Choose>

            <Text>{orderProgress}</Text>
        </div>
    )
}

export default Progress
