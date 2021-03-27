import React from "react"
import { render, screen } from "@testing-library/react"
import ViewDetailsButton from "./view-details-button"
import { Link } from "react-router-dom"
import { toHaveComponentCalledWith } from "../../../utils/test/jest-extension"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: jest.fn().mockImplementation(({ children }) => children)
}))

describe("ViewDetails button", () => {

    it("shows the 'See Details' button and takes us to the details page", () => {

        render(
            <ViewDetailsButton to="/i-need-to-know-more" />
        )
        expect(screen.getByText("View Details")).toBeInTheDocument()

        toHaveComponentCalledWith(Link, {
            to: "/i-need-to-know-more"
        })
    })
})
