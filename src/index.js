import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/Badge_New'
import Badges from './pages/Badges';
import App from './components/App';
import './style/Global.css';

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

//const name  = 'Stephanie';
//const sum = () => 3+3;

//const jsx = <h1>Hola soy, {undefined}</h1>;
const container = document.getElementById('root');
ReactDOM.render(<App/>,container);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
