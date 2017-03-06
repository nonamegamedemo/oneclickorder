'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {MainContainer} from './main-container';
import {ToursContainer} from './pages/tours-container';
import {ToursRecommendContainer} from './pages/tours-recommend-container';
import {OrdersContainer} from './pages/orders-container';
import mainSass from './sass/main.sass';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render( (
        <Router history={browserHistory}>
            <Route path="/" component={MainContainer} >
                <IndexRoute component={ToursRecommendContainer} />
                <Route path="tours" component={ToursContainer} />
                <Route path="orders" component={OrdersContainer} />
            </Route>
        </Router>
    ),
    document.getElementById('mainContainer')
);