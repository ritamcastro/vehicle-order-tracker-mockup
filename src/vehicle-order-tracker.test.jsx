import React from "react"
import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import VehicleOrderTracker from "./vehicle-order-tracker"

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     BrowserRouter: ({ children }) => <>{children}</>,
// }))


describe("Vehicle order tracker for Remote React Summit 2021", () => {



    // You open your browser and you are already on the Dashboard for the "Vehicle order tracker".
    // From the Tabs up above the User gets a clear picture of the status of the ongoing orders

    // At a glance, there is also a list with all of the orders and the information that was found more relevant about them.

    // If more information is needed about an order, the "View details" button takes us to the Details Page.In here the "Order details" can be checked, as well as a very clean and neat timeline with the history of how the car came to be.Done with checking this order ? Click on the "Back" button and come back to the "Order List" page.
    // And because feedback is important and Customers should have their expecations managed, it is important to be able to see what are the orders that are "Delayed".So, let's "Filter" by "Status" and see them in the "List"!



    it("renders the Dashboard and we can 'View details' of an Order and come 'Back' to the Dashboard", async () => {

        render(<VehicleOrderTracker />)

        expect(screen.getByRole("tablist")).toBeInTheDocument()

        expect(screen.getByRole("region", { name: "Order list" })).toBeInTheDocument()
        expect(screen.getByText("All orders")).toBeInTheDocument()

        const scullysOrder = screen.getByLabelText("Dana Scully's order")
        expect(scullysOrder).toBeInTheDocument()

        const viewDetailsButton = within(scullysOrder).getByRole("link", { name: "View details" })
        userEvent.click(viewDetailsButton)

        expect(screen.getByRole("region", { name: "Order details" })).toBeInTheDocument()

        const backButton = screen.getByRole("button", { name: "Back" })
        expect(backButton).toBeInTheDocument()

        userEvent.click(backButton)

        await waitFor(() => {
            expect(screen.getByText("All orders")).toBeInTheDocument()
        })

    })






    //         expect(screen.getByAltText(/hadron logo/i)).toBeInTheDocument()
    //         expect(screen.getByAltText(/hadron logo/i).parentElement)
    //             .toHaveProperty("href", expect.stringMatching(/\/$/))
    //         expect(Logout).toHaveBeenCalled()

    //         expect(screen.getByText("Projects Overview")).toBeInTheDocument()
    //         expect(screen.queryByText("Create Project")).not.toBeInTheDocument()
    //     })

    //     it("renders Imprint at '/imprint'", () => {
    //         renderWithMemoryRouter(<App />, "/imprint")

    //         expect(Imprint).toHaveBeenCalled()
    //     })

    //     it("renders DataProtectionDeclaration at '/data-protection-declaration'", () => {
    //         renderWithMemoryRouter(<App />, "/data-protection-declaration")

    //         expect(DataProtection).toHaveBeenCalled()
    //     })

    //     it("renders the footer", () => {
    //         renderWithMemoryRouter(<App />, "/")

    //         expect(Footer).toHaveBeenCalled()
    //     })

    //     describe("legal links", () => {
    //         it("renders Imprint at '/imprint'", () => {
    //             renderWithMemoryRouter(<App />, "/imprint")

    //             expect(Imprint).toHaveBeenCalled()
    //         })

    //         it("renders DataProtectionDeclaration at '/data-protection-declaration'", () => {
    //             renderWithMemoryRouter(<App />, "/data-protection-declaration")

    //             expect(DataProtection).toHaveBeenCalled()
    //         })

    //         it("renders ThirdPartyLicenses at '/third-party-licenses'", () => {
    //             renderWithMemoryRouter(<App />, "/third-party-licenses")

    //             expect(ThirdPartyLicenses).toHaveBeenCalled()
    //         })
    //     })
})
