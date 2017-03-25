import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';
import {selectHotel} from '../actions/order-actions.js';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import { browserHistory } from 'react-router';
import { HotelList } from './hotel-list';

const mapStateToProps = (state) => {
	return state;
}

const mapDispatchToProps = (dispatch) => {
	return {
		onHotelClick: (hotel) => {
			console.log(hotel);
			dispatch(selectHotel(hotel));
			browserHistory.push('/createOrder');
		}
	};
}

const HotelListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HotelList);

export default HotelListContainer;