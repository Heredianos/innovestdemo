import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BadgeNew from '../pages/Badge_New';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import LogIn from '../pages/LoginPage';
import Simulator from '../pages/Simulator';

function App (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route exact path ="/login" component = {LogIn} />
                <Route exact path ="/badges" component = {Badges}/>
                <Route exact path ="/simulator" component = {Simulator} />
                <Route exact path ="/badges/new" component = {BadgeNew}/>
                <Route component = {NotFound}/>
            </Switch>            
        </BrowserRouter>
    );
}

export default App;