import React from 'react';
import NavBar from '../components/NavbarNoLogin';

class NotFound extends React.Component{

    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <h1> Página no encontrada </h1>
            </React.Fragment>
            
        );
    }
}
export default NotFound;