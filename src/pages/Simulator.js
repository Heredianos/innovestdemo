import React from 'react';
import NavBar from '../components/Navbar';

import Result from '../components/Result'


class Simulator extends React.Component {
  
    render() {
        return(
            <React.Fragment>
                <NavBar/>
                <Result/>
            </React.Fragment>
        );
    }
}

export default Simulator;