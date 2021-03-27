import React from "react"
import { render, screen } from "@testing-library/react"


describe('Order list organism', () => {
    it('should have a title, the search bar, the filters button and the table with the orders', () => {

        render(<OrderList />)

        expect(screen.getByText("All orders")).toBeInTheDocument()
        expect(<SearchBar />).toHaveBeenCalled()

        expect(<FiltersButton />).toHaveBeenCalledWith(expect.objectContaining(props), {})


    });
});