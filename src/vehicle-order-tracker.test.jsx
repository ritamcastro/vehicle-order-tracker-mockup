import React from "react"
import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import VehicleOrderTracker from "./vehicle-order-tracker"

describe("Vehicle order tracker for Remote React Summit 2021", () => {

    it("renders the Dashboard and we can 'View details' of an Order and come 'Back' to the Dashboard", async () => {

        render(<VehicleOrderTracker />)

        const dashboard = screen.getByRole("region", { name: "Dashboard" })
        expect(dashboard).toBeInTheDocument()

        const overviewTabs = within(dashboard).getByRole("tablist")
        expect(overviewTabs).toBeInTheDocument()

        expect(within(dashboard).getByText("All orders")).toBeInTheDocument()
        expect(within(dashboard).getByLabelText("Search for an order")).toBeInTheDocument()
        expect(within(dashboard).getByLabelText("Filter orders")).toBeInTheDocument()

        const scullysOrder = within(dashboard).getByLabelText("Dana Scully's order")
        expect(scullysOrder).toBeInTheDocument()

        const viewDetailsButton = within(scullysOrder).getByRole("link", { name: "View details" })
        userEvent.click(viewDetailsButton)

        expect(screen.queryByRole("region", { name: "Dashboard" })).not.toBeInTheDocument()
        expect(screen.getByRole("region", { name: "Order details" })).toBeInTheDocument()

        const backButton = screen.getByRole("button", { name: "Back" })
        expect(backButton).toBeInTheDocument()

        userEvent.click(backButton)

        await waitFor(() => {
            expect(screen.getByText("All orders")).toBeInTheDocument()
        })
    })
})



  // You open your browser and you are already on the Dashboard for the "Vehicle order tracker".
    // From the Tabs up above the User gets a clear picture of the status of the ongoing orders

    // At a glance, there is also a list with all of the orders and the information that was found more relevant about them.

    // If more information is needed about an order, the "View details" button takes us to the Details Page.
    // In here the "Order details" can be checked, as well as a very clean and neat timeline with the history of how the car came to be.

    // Done with checking this order ? Click on the "Back" button and come back to the "Order List" page.
    // see what are the orders that are "Delayed".So, let's "Filter" by "Status" and see them in the "List"!
