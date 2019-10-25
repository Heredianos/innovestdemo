import React from 'react';
import BadgesList from '../components/BadgesList'
import NavBar from '../components/Navbar';

import '../style/Badge.css';
import '../style/BadgeNew.css';
import '../style/Badges.css';

import headerImg from '../images/stars.svg'

class Badges extends React.Component {
    state = {
        data: [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'Juan',
                lastName: 'Heredia',
                email: 'juan.heredia@mas-menos.net',
                enterprice: 'Más-Menos',
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Javier',
                lastName: 'Carrera',
                email: 'javier.carrera@innovest.net',
                enterprice: 'Innovest',
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Mijail',
                lastName: 'Zacarias',
                email: 'mijail.zacarias@yudas.net',
                enterprice: 'Yudas',
            },
        ],
    }

    render() {
        return(
            <React.Fragment>
                <NavBar/>
                
        
                <div className="Badges_Conteiner">
                    <div className="Badge_conteiner">
                        <BadgesList badges= {this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;