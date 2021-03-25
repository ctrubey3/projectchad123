import React from 'react'

const Search = props => {
    const { getFilterValue } = props
    return (
        <React.Fragment>
            <div
                onChange={getFilterValue}
            />
        </React.Fragment>
    )
}
export default Search
