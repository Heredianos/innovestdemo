import React from 'react';
import Navbar from '../components/NavbarNoLogin';
import LogIn from '../components/LogIn';
import '../style/Home.css'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Hero">
                    <Navbar/>
                    <div className="LogInPosition">
                        <LogIn/>
                    </div>
                    <div className="Header-Message">
                        <h1>Por que la mejor inversión <br/> ¡Eres tu!</h1>
                    </div>
                </div>
                <div className="Content">
                </div>
            </React.Fragment>
        )
    }
}
export default Home;