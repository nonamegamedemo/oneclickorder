import React, { Component } from 'react';
import flightListData from '../mocha-data/flight.js';
import { Button} from 'semantic-ui-react';
import {selectFlight} from '../actions/order-actions.js';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import { browserHistory } from 'react-router';
import { FlightList } from './flight-list';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFlightClick: (flight) => {
      console.log(flight);
    	dispatch(selectFlight(flight));
      browserHistory.push('/createOrder');
    }
  };
}

const FlightListContainer = connect (
	mapStateToProps,
	mapDispatchToProps
	)(FlightList);

export default FlightListContainer;

