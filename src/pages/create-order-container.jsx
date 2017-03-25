import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CreateOrder} from './create-order';
import orderData from '../mocha-data/order.js';
import * as _ from 'lodash';
import {saveOrder, createOrder, switchToRelaxOrder, changeFlight} from '../actions/order-actions.js';
// format data's time to Date type
import {getRoute, getDetailGroupOfDate} from '../helpers/order-helpers.js';
import { browserHistory } from 'react-router';
import {tourScheduleList} from '../mocha-data/tour-schedule.js';
import dateformat from 'dateformat';

let firstOrder;
const mapStateToProps = (state)=>{
    // console.log(state.orders);
    // let orders = orderData.orders;
    // firstOrder =_.cloneDeep(_.first(orders));
    let order = state.createOrder;
    firstOrder = order;
    let route, detail;

    if (order) {
        route = getRoute(order);
        detail = getDetailGroupOfDate(firstOrder);
    }
    
    return {route, detail, orderData: firstOrder};
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        onRelaxChanged: (isRelax) => {
            dispatch(switchToRelaxOrder(isRelax));
        },
        onSaveClick: ()=>{
            dispatch(saveOrder(firstOrder));
            browserHistory.push('/orders');
        },
        onClickFlight: (flight)=>{
            dispatch(changeFlight(flight));
            browserHistory.push(`/flightList/${flight.from}/${flight.to}/${dateformat(flight.departure, 'yyyy-mm-dd')}`);
        }
    };
}

const CreateOrderContainer = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CreateOrder);

export default CreateOrderContainer;
