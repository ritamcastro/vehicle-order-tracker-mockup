import React from "react"
import { render, screen } from "@testing-library/react"
import OrdersList from "./orders-list"
import FiltersButton from "../../molecules/filters-button/filters-button"
import SearchBar from "../../molecules/search-bar/search-bar"
import OrdersTable from "../../molecules/orders-table/orders-table"

jest.mock("../../molecules/filters-button/filters-button", () => {
    return {
        __esModule: true,
        default: jest.fn().mockReturnValue(null)
    }
})

jest.mock("../../molecules/search-bar/search-bar", () => {
    return {
        __esModule: true,
        default: jest.fn().mockReturnValue(null)
    }
})

jest.mock("../../molecules/orders-table/orders-table", () => {
    return {
        __esModule: true,
        default: jest.fn().mockReturnValue(null)
    }
})

describe('OrdersList organism', () => {
    it('should have a title, the search bar, the filters button and the table with the orders', () => {

        render(<OrdersList />)

        expect(screen.getByText("All orders")).toBeInTheDocument()

        expect(SearchBar).toHaveBeenCalled()
        expect(FiltersButton).toHaveBeenCalled()
        expect(OrdersTable).toHaveBeenCalled()
    })
})
