import React from "react"
import "./search-bar.scss"

const SearchBar = () => {

    return (
        <div role="searchbox" aria-label="Search for an order" className="search-bar">
            <img src="/assets/icons/24-px-magnifier.svg" />

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