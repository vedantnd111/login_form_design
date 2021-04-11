import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';
function Routes() {
    return (
       <BrowserRouter>
       <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/hello" exact component={Hello} />
       </Switch>
       </BrowserRouter>
    )
}

export default Routes
