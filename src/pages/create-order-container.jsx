import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CreateOrder} from './create-order';
import orderData from '../mocha-data/order.js';
import * as _ from 'lodash';
// format data's time to Date type
import {getRoute} from '../helpers/order-helpers.js';

const mapStateToProps = (state)=>{
    // let tourId = state.createOrder.tourId;
    // let tour = state.tours[tourId];
    let orders = orderData.orders;
    let firstOrder = _.first(orders);
    let route = getRoute(firstOrder);
    // let route = [
    //     {'type': 'flight'}
    // ];

    // return {tour, route};
    return {route};
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSaveClick: (order)=>{
            dispatch(saveOrder(order));
        }
    }
}

const CreateOrderContainer = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CreateOrder);

export default CreateOrderContainer;
