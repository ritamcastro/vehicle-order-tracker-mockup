import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
// import { useHistory } from "react-router-dom"
import BackButton from "./back-button"

const mockHistoryGoBack = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        goBack: mockHistoryGoBack
    })
}))


describe("Back button", () => {
    it("takes us back to where we were...", () => {

        render(<BackButton />)
        expect(screen.getByText("Back")).toBeInTheDocument()

        const leButton = screen.getByRole("button", { name: "Back" })
        expect(leButton).toBeInTheDocument()

        fireEvent.click(leButton)

        expect(mockHistoryGoBack).toHaveBeenCalledTimes(1)
    })
})
