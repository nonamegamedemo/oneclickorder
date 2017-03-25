import React, { Component } from 'react';
import flightListData from '../mocha-data/flight.js';
import { Button} from 'semantic-ui-react';
import {selectFlight} from '../actions/order-actions.js';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import { browserHistory } from 'react-router';
import {Container, Icon, Header}       from 'semantic-ui-react';



class CardList extends Component {
	constructor(props) {
        super(props);

        this.state = {};
        this.onFlightClick = this._onFlightClick.bind(this);
    }
    _onFlightClick(flight) {
        this.props.onFlightClick(flight);
    }
	render() {
		var fromCity = this.props.fromCity;
		var toCity = this.props.toCity;
		var fromTime = this.props.fromTime;
		fromCity = "上海";
		toCity = "香港";
		fromTime = "2017-01-02";
		const card = (
			<div >
				<h1>{fromTime} 至 {toCity} 的机票</h1>
				{this.props.listData[fromCity][toCity].map((data)=>
					<div style={cardStyle} width="1000">
						<table>
							<tr>
								<th width="150"><h1>{data.company}</h1></th>
								<th width="150"><h3>{data.flightNo}</h3></th>
								<table width="900"> 
									<tr>
										<td><h2>{data.fromAirport}</h2></td>
										<td></td>
										<td><h2>{data.toAirport}</h2></td>
									</tr>
									<tr>
										<td></td>
										<td>===========></td>
										<td></td>
									</tr>
									<tr>
										<td><h3>{data.fromTime}</h3></td>
										<td></td>
										<td><h3>{data.toTime}</h3></td>
									</tr>
								</table>
								<th><Button onClick={()=>{this.onFlightClick(data)}}>选择</Button></th>
							</tr>
						</table>					
					</div>
				)}
			</div>
		);

		return (
			<div>
				{card}
			</div>
		);
	}
}

const cardStyle = {
	width: "100%",
	border: "1px solid black",
	margin: "10px",
};

export class FlightList extends Component {
	onClick() {
        this.props.onFlightClick();
    }
    render() {
    	const listData = flightListData.flightList;
        return (
            <CardList listData={listData} onFlightClick={this.props.onFlightClick} fromCity={this.props.params.fromCity} toCity={this.props.params.toCity} fromTime={this.props.params.fromTime}/>
        );
    }
}

FlightList.propTypes = {
	onFlightClick: React.PropTypes.func.isRequired,
}