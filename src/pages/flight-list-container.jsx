import React, { Component } from 'react';
import flightListData from '../mocha-data/flight.js';


export class FlightListContainer extends Component {
    render() {
    	const listData = flightListData.flightList;
        return (
            <CardList listData={listData} fromCity={this.props.params.fromCity} toCity={this.props.params.toCity} fromTime={this.props.params.fromTime}/>
        );
    }
}

class CardList extends Component {
	_handleClick() {
		alert('selected!');
	}

	render() {
		var fromCity = this.props.fromCity;
		var toCity = this.props.toCity;
		var fromTime = this.props.fromTime;
		const card = (
			<div >
				{this.props.listData[fromCity][toCity].map((data)=>
					<div>
						<p>{data.flightNo}</p>
						<p>{data.company}</p>
						<p>{data.fromTime}</p>
						<p>{data.toTime}</p>
						<p>{data.fromAirport}</p>
						<p>{data.toAirport}</p>
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
const floatStyle = {
	float: "left"
}

const cardStyle = {
	width: "100%",
	border: "1px solid black",
	margin: "10px",
};

const imgStyle = {
	width: "210px",
	height: "140px"
};

const cityLabelStyle = {
	position: "absolute",
	top: "0",
	left: "0",
	height: "20px",
	background: "rgba(102,102,102,0.9)",
	font: "12px",
	color: "white",
	linehight: "12px",
	padding: "0px 6px 0px 8px"
};