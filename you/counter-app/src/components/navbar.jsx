import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return ( 
        <nav>
            NavBar -- 
            <span>
                {totalCounters}
            </span>
        </nav>
     );
}
 
export default NavBar;