import React, { Component } from 'react';
import flightListData from '../mocha-data/flight.js';
import { Button} from 'semantic-ui-react';
import {selectFlight} from '../actions/order-actions.js';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import { browserHistory } from 'react-router';
import {Card, Icon, Header}       from 'semantic-ui-react';

import {HeaderPart} from '../components/header';



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
				<HeaderPart></HeaderPart>
				<h1>{fromTime} 至 {toCity} 的机票</h1>
				<Card.Group>
					{this.props.listData[fromCity][toCity].map((data)=>
						<Card fluid color='blue' header='Option 1' key={data.flightNo}>
							<table>
								<tr>
									<td><Icon name='plane' size='big' color='blue'/></td>
									<td width="150"><h1>{data.company}</h1></td>
									<td width="150"><h3>{data.flightNo}</h3></td>
									<td>
										<Header as='h2' content={data.departureTerminal} subheader={data.departure} />
									</td>
									<td>
										<td><Icon name='long arrow right' size='huge' color='grey'/></td>
									</td>
									<td>
										<Header as='h2' content={data.arrivalTerminal} subheader={data.arrive} />
									</td>
									<td width="100"><h3>RMB: {data.price}</h3></td>
									<td width="100"><Button onClick={()=>{this.onFlightClick(data)}}>选择</Button></td>
								</tr>
							</table>					
						</Card>
					)}
				</Card.Group>
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