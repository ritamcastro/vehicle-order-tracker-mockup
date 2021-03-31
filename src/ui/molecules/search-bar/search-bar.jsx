import React from "react"

const SearchBar = () => {

    return (
        <div role="searchbox" aria-label="Search for an order">
            <input aria-labelledby="Search keywords" type="search"
                name="search" placeholder="Search" spellCheck="false" />
        </div>
        // <form id="search" role="search">
        //     <label for="search-input">Search this site</label>
        //     <input type="search" id="search-input" name="search" spellcheck="false" />
        //     <input value="Submit" type="submit" />
        // </form>
    )
}

export default SearchBar