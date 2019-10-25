import React from 'react';
import Navbar from '../components/Navbar';
import LogIn from '../components/LogInComplete';
import '../style/Home.css'

class LoginPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <Navbar/>
                    <LogIn/>
            </React.Fragment>
        )
    }
}
export default LoginPage;