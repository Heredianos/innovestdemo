import React from 'react';
import {Link} from 'react-router-dom';
import '../style/BadgeForm.css';

class BadgeForm extends React.Component {
    state = {};
    /*
    handleClick = (e) => {
        console.log("button was clicked");
    }
    */
/*
    handleChange = e => {
        console.log({ 
            name: e.target.name,
            value: e.target.value,
        });
    
        this.setState({
            [e.target.firstName]: e.target.value,
            [e.target.lastname]:e.target.value,
            [e.target.email]:e.target.value,
            [e.target.enterprice]: e.target.value,
        });

    };
*/
handleClick = (e) => {
    console.log("Button was clicked");
    };

handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button was submit");
    //console.log(this.state);
};
    
    render(){
        return <div className="BadgeForm">
            <h1>  Registrate  </h1>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label> Nombres  </label>
                    <input onChange={this.props.onChange} 
                        className="form-control"
                        type="text"
                        name="firstName"
                        value = {this.state.firstName}
                    />
                </div>
                <div className="form-group">
                    <label> Apellidos </label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        value = {this.state.lastName}
                    />
                </div>
                <div className="form-group">
                    <label> Email </label>
                    <input onChange= {this.props.onChange}
                        className="form-control"
                        type="text"
                        name="email"
                        value = {this.state.email}
                    />
                </div>
                <div className="form-group">
                    <label> Empresa </label>
                    <input onChange = {this.props.onChange}
                        className="form-control"
                        type="text"
                        name="enterprice"
                        value = {this.state.enterprice}
                    />
                </div>
                <div className="form-group">
                    <label> Contraseña </label>
                    <input onChange = {this.props.onChange}
                        className="form-control"
                        type="password"
                        name="password"
                        value = {this.state.password}
                    />
                </div>
                <div className="form-group">
                    <label> Confirmar Contraseña </label>
                    <input onChange = {this.props.onChange}
                        className="form-control"
                        type="password"
                        name="password"
                        value = {this.state.password}
                    />
                </div>
                <div className="btn">
                    <Link to ="/badges">
                         <button onClick={this.handleClick} className="btn-primary" > Guardar </button>                    
                    </Link>
                </div>
            </form>
        </div>;
    }
}
export default BadgeForm;