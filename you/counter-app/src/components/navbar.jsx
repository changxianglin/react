import React, { Component } from 'react';

const NavBar = (props) => {
    return ( 
        <nav>
            NavBar -- 
            <span>
                {props.totalCounters}
            </span>
        </nav>
     );
}
 
export default NavBar;