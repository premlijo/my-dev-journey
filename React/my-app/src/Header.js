import React from "react";

const Header = (props) => {
    return (
        <header style={{backgroundColor: "blue", color: 'white'}}>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps  ={
    title: "To Do Listt"
}

export default Header;