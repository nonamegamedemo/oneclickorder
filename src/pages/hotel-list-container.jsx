import React, { Component } from 'react';
import hotelListData from '../mocha-data/hotel.js';


export class HotelListContainer extends Component {
    render() {
    	const listData = hotelListData.hotelList;
        return (
            <CardList listData={listData} fromCity={this.props.params.fromCity} fromTime={this.props.params.fromTime}/>
        );
    }
}

class CardList extends Component {
	_handleClick() {
		alert('selected!');
	}

	render() {
		var fromCity = this.props.fromCity;
		var fromTime = this.props.fromTime;
		const card = (
			<div >
				<h1>{fromCity} 在 {fromTime} 的酒店</h1>
				{this.props.listData[fromCity].map((data)=>
					<div style={cardStyle} width="1000">
						<table>
							<tr>
								<th><img src={data.pic}/></th>
								<th width="300">
								<table>
									<tr>
										<td><h2>{data.name}</h2></td>
									</tr>
									<tr>
										<td><p>{data.address}</p></td>
									</tr>
								</table>
								</th>
								<th width="100">星级：{data.level}</th>
								<th width="100">评价：{data.score}</th>
								<th width="100"><h2>{data.price}</h2></th>
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