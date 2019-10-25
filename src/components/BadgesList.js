import React from 'react';
import {Link} from 'react-router-dom';

import '../style/Badge.css';


class BadgesListItem extends React.Component{
    render(){
        return (
            <div className="BadgesListItem">
                <div className="Badge">
                    <div className="Badge_SectionName">
                        <strong>
                            {this.props.badge.firstName} {this.props.badge.lastName}
                        </strong>
                    </div>
                    
                    <br/>
                    <div className="Badge_Enterprice" >
                        {this.props.badge.enterprice}
                    </div>
                </div>
            </div>
        );
    }
}

class BadgesList extends React.Component{
    render(){
        return (
            <div>
                <ul className="list-unstyled" >
                    {this.props.badges.map((badge)=>{
                        return (
                            <li key={badge.id}>
                                <Link to="/simulator">
                                    <BadgesListItem badge = {badge} />
                                </Link>
                            </li>
                        )
                    }

                    )}
                </ul>
            </div>
        );
    }
}
export default BadgesList;