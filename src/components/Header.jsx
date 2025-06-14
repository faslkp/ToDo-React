import React from 'react'

function Header() {
    return (
        <div style={{backgroundColor: "#0a4c52", height: "80px", width: "100%", display: "flex", alignItems: "center", position: "sticky", top: 0, zIndex: 100}}>
            <div style={{ width: "90%", margin: "0 auto", color: "white"}}>
                <h1>ToDo</h1>
            </div>
        </div>
    )
}

export default Header
