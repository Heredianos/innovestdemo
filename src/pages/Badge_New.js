import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

import '../style/BadgeNew.css';
import { isModuleDeclaration } from '@babel/types';

class BadgeNew extends React.Component {

    state = {form: {
        lastName: '',
        firstName: '',
        email: '',
        enterprice: '',
        password:'',
    }};

    handleChange = e => {
        console.log("Cambiado");
        //const nextForm  = this.state.form;
        //nextForm[e.target.name] = e.target.value;
        
        this.setState ({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        
    };

/*
handleChange = (e) => {
        
    console.log({
            name: e.target.name, 
            value: e.target.value,
        });

   this.setState({
       [e.target.name]: e.target.value,
   });
};
*/
    
render(){
    return (
        <React.Fragment>
            <Navbar/>
            <div className="conteiner">
                <div className="row-6" >
                    <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                </div>
                <div className="row-6">
                    <Badge 
                        firstName={this.state.form.firstName || 'Nombres'} 
                        lastName={this.state.form.lastName|| 'Apellidos'}  
                        enterprice={this.state.form.enterprice|| 'Empresa'}
                        //jobTitle = "Fronted"
                        email = {this.state.form.email}
                        />
                </div>
            </div>
        </React.Fragment>
    );
    }
}

export default BadgeNew;