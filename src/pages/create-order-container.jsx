import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CreateOrder} from './create-order';
// import orderData from '../mocha-data/order.json';

const mapStateToProps = (state)=>{
    // let tourId = state.createOrder.tourId;
    // let tour = state.tours[tourId];
    let route = [
        {'type': 'flight'}
    ];

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
