import React from "react";

import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return (<>

            
            <nav>
                    <h3>Hekate Store</h3>
                    <div >
                        <Link to='/biblioteca'>Biblioteca</Link>
                        <Link to='/joyeria'>Joyeria</Link>
                        <Link to='/servicios'>Servicios</Link>
                        <Link to='/'>Exit</Link>
                    </div>
            </nav>
            
            </>)
};

export default NavBar;