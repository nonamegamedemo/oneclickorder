'use strict';
import React                                      from 'react';
import ReactDOM                                   from 'react-dom';
import {MainContainer}                            from './main-container';
import {TourContainer}                            from './pages/tour-container';
import {ToursContainer}                           from './pages/tours-container';
import {ToursRecommendContainer}                  from './pages/tours-recommend-container';
import {OrdersContainer}                          from './pages/orders-container';
import CreateOrderContainer                     from './pages/create-order-container';
import mainSass                                   from './sass/main.sass';
import {Router, Route, IndexRoute, browserHistory, RouterContext}from 'react-router';
import {Provider}                                 from 'react-redux';
import store                                      from './common/store';

ReactDOM.render( (
        <Provider store={store}>
            <Router history={browserHistory} render={props => <RouterContext {...props} />}>
                <Route path="/" component={MainContainer} >
                    <IndexRoute component={ToursRecommendContainer} />
                    <Route path="tours" component={ToursContainer} />
                    <Route path="tours/:tourid" component={TourContainer} />
                    <Route path="orders" component={OrdersContainer} />
                    <Route path="createOrder" component={CreateOrderContainer} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('mainContainer')
);