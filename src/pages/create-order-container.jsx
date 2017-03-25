import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CreateOrder} from './create-order';
import orderData from '../mocha-data/order.js';
import * as _ from 'lodash';
import {saveOrder} from '../actions/order-actions.js';
// format data's time to Date type
import {getRoute, getDetailGroupOfDate} from '../helpers/order-helpers.js';
import { browserHistory } from 'react-router';

let firstOrder;
const mapStateToProps = (state)=>{
    let orders = orderData.orders;
    firstOrder =_.cloneDeep(_.first(orders));
    let route = getRoute(firstOrder);
    let detail = getDetailGroupOfDate(firstOrder);
    
    return {route, detail, orderData: firstOrder};
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSaveClick: ()=>{
            dispatch(saveOrder(firstOrder));
            browserHistory.push('/orders');
        },
        onClickFlight: (flight)=>{
            browserHistory.push('/flightList/上海/香港/2017-03-12');
        }
    };
}

const CreateOrderContainer = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CreateOrder);

export default CreateOrderContainer;
