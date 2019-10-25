import React from 'react';
import '../style/LogIn.css';

class LogIn extends React.Component {
    render() {
        return  (
            <React.Fragment>
                <div className="BadgeLogIn">       
                        <div className="CloseLogIn">
                            <button>
                                X
                            </button>
                        </div> 
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
                    </div>
            </React.Fragment>
        )
    }
}
export default LogIn;