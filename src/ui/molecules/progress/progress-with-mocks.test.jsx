import React from "react"
import { render, screen } from "@testing-library/react"
import Progress from "./progress"
import InTransitIcon from "../../atoms/icons/in-transit"
import Text from "../../atoms/text/text"

jest.mock("../../atoms/icons/in-transit", () => {
    return {
        __esModule: true,
        default: jest.fn().mockReturnValue(null)
    }
})

jest.mock("../../atoms/text/text", () => {
    return {
        __esModule: true,
        default: jest.fn().mockReturnValue(null)
    }
})

describe("Progress molecule", () => {
    it("renders the visual elements when status is 'In transit'", () => {

        render(
            <Progress status={7} />
        )

        expect(InTransitIcon).toHaveBeenCalled()
        expect(Text).toHaveBeenCalledWith(expect.objectContaining(
            { children: "In transit" }
        ), {})
    })
})
