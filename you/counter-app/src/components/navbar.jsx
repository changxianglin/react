import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Renderd')
    
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