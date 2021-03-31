import React from "react"
import { MemoryRouter, Route, Switch } from "react-router"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import OrdersList from "./orders-list"
import { getOrders } from "../../../services/get-orders"

jest.mock("../../../services/get-orders", () => ({
    getOrders: jest.fn()
}))

describe("OrdersList organism", () => {
    it("shows the order list and we can click to 'View Details'", () => {

        getOrders.mockReturnValue([
            {
                id: 1024,
                name: "Rita Castro",
                vehicle: "T-Roc",
                status: "delayed",
                progress: "order received",
                arrivalDate: "2021-07-24",
            }
        ])

        render(
            <MemoryRouter initialEntries={["/"]}>
                <Switch>
                    <Route exact path="/" render={() => <OrdersList />} />
                    <Route path="/orders/:orderId" render={() => <div>Stub Details Page</div>} />
                </Switch>
            </MemoryRouter>
        )

        expect(screen.getByRole("heading", { name: "All orders" })).toBeInTheDocument()

        expect(screen.getByText("Rita Castro")).toBeInTheDocument()
        // same goes for the other elements in the table

        const viewDetailsButton = screen.getByRole("link", { name: "View details" })
        userEvent.click(viewDetailsButton)

        expect(screen.getByText("Stub Details Page")).toBeInTheDocument()
    })
})
