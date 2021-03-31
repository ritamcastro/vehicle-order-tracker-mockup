import React from "react"
import { render, screen } from "@testing-library/react"
import Progress from "./progress"
import InTransitIcon from "../../atoms/icons/in-transit"

jest.mock("../../atoms/icons/in-transit", () => {
    return {
        __esModule: true,
        default: jest.fn().mockReturnValue(null)
    }
})

describe("Progress molecule", () => {
    it("renders the visual elements when status is 'In transit'", () => {

        render(
            <Progress />
        )

        expect(screen.getByText("In transit")).toBeInTheDocument()

        expect(InTransitIcon).toHaveBeenCalled()
    })
})
