import App from './components/app.jsx'
import Home from './components/home.jsx'
import Notfound from './components/notfound.jsx'
import React  from 'react';
import {Route, IndexRedirect} from 'react-router';

export default(
    <Route path='/' component={App}>
        <IndexRedirect to='home'/>
        <Route path='/home' component={Home}/>
        <Route path='*' component={Notfound}/>
    </Route>

)