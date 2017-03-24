import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CreateOrder} from './create-order';
import orderData from '../mocha-data/order.js';
import * as _ from 'lodash';
import {saveOrder} from '../actions/order-actions.js';
// format data's time to Date type
import {getRoute, getDetailGroupOfDate} from '../helpers/order-helpers.js';
import { browserHistory } from 'react-router';

const mapStateToProps = (state)=>{
    // let tourId = state.createOrder.tourId;
    // let tour = state.tours[tourId];
    let orders = orderData.orders;
    let firstOrder =_.cloneDeep(_.first(orders));
    let route = getRoute(firstOrder);
    let detail = getDetailGroupOfDate(firstOrder);
    console.log(detail);
    
    // let route = [
    //     {'type': 'flight'}
    // ];

    // return {tour, route};
    return {route, detail, orderData: firstOrder};
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSaveClick: (order)=>{
            console.log('click save order');
            dispatch(saveOrder(order));
            browserHistory.push('/orders');
        }
    };
}

const CreateOrderContainer = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CreateOrder);

export default CreateOrderContainer;
