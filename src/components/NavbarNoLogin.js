import React from 'react';
import {Link} from 'react-router-dom';

import '../style/NavbarNoLogin.css';

import innovestLogo from '../images/logo-Innovest.png';

class NavBarNoLogin extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="Navbar" >
                    <div className="Navbar-buttons">
                        <Link to ='badges/new' >
                            <button className="solid-btn" > Únete ahora </button>
                        </Link>
                        <Link to ='login' >
                            <button className="ghost-btn" > Iniciar sesión </button>
                        </Link>
                    </div>
                    <div className="Navbar-image">
                        <Link to ='/'>
                            <img src={innovestLogo} alt="logo"/>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default NavBarNoLogin;