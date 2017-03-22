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
								<th>预定</th>
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