import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue br3"
                type="search"
                placeholder="search countries"
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;