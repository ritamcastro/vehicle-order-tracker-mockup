import React from "react"
import { render, screen } from "@testing-library/react"
import ViewDetailsButton from "./view-details-button"
import { Link } from "react-router-dom"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: jest.fn().mockImplementation(({ children }) => children)
}))

describe("ViewDetails button", () => {
    it("shows the 'See Details' that will takes us somewhere", () => {

        render(
            <ViewDetailsButton to="/take-me-to-react-summit-in-amsterdam" />
        )
        expect(screen.getByText("View details")).toBeInTheDocument()

        expect(Link).toHaveBeenCalledWith(expect.objectContaining(
            { to: "/take-me-to-react-summit-in-amsterdam" }
        ), {})
    })
})
