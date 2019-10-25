import React from 'react';
import '../style/LogIn.css';

class LogIn extends React.Component {
    render() {
        return  (
            <React.Fragment>
                <div className="BadgeLogIn BadgeLogInComplete">       
                        <form>
                            <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            />

                            <input
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            />
                        </form>
                        <p> Olvide contraseña </p>
                        <button>
                            Iniciar Sesión 
                        </button>
                    </div>
            </React.Fragment>
        )
    }
}
export default LogIn;