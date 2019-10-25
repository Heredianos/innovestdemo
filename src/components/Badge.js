import React from 'react';
import innovestLogo from '../images/logo-Innovest.png';
import '../style/Badge.css';

class Badge extends React.Component {
    render() {
        return  <div className="Badge">        
                    <div className="Badge_Header">
                        <img src={innovestLogo}  alt="logo" />
                    </div>
                    <div className="Badge_SectionName" >
                        <img className="Badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="imagen de perfil" />                            
                        <h1> {this.props.firstName } <br/> {this.props.lastName} </h1>
                    </div>
                    <div className="Badge_Enterprice">
                        <h3>Logo de empresa</h3>
                        <h2> {this.props.enterprice} </h2>
                    </div>
                </div>;
    }
}

export default Badge;