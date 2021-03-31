import React from "react"
import { render, screen } from "@testing-library/react"
import ViewDetailsButton from "./view-details-button"
import { MemoryRouter } from "react-router-dom"

describe("ViewDetails button", () => {
    it("shows the 'See Details' that will takes us somewhere", () => {

        render(
            <MemoryRouter initialEntries={["/lisbon"]}>
                <ViewDetailsButton to="/take-me-to-react-summit-in-amsterdam" />
            </MemoryRouter>
        )

        const viewDetails = screen.getByRole("link", { name: "View details" })
        expect(viewDetails).toBeInTheDocument()
        expect(viewDetails).toHaveAttribute(
            "href", "/take-me-to-react-summit-in-amsterdam")

        expect(viewDetails).toHaveClass("sassy-link")
    })
})
