import React from 'react'

function Flex({children}) {
    const flexStyle =
    {
        display: "flex",
        justifyContent: "space-arround",
        flexWrap: "wrap",
    }


    return (
        <div style={flexStyle}>
           {children}
        </div>
    )
}

export default Flex

