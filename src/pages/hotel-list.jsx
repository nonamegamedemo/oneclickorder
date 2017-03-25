import React, { Component } from 'react';
import hotelListData from '../mocha-data/hotel.js';
import { Button} from 'semantic-ui-react';

import {HeaderPart} from '../components/header';

export class HotelList extends Component {
	onClick() {
		this.props.onHotelClick();
	}
    render() {
    	const listData = hotelListData.hotelList;
        return (
            <CardList listData={listData} onHotelClick={this.props.onHotelClick} fromCity={this.props.params.fromCity} fromTime={this.props.params.fromTime}/>
        );
    }
}

class CardList extends Component {
	constructor(props) {
        super(props);

        this.state = {};
        this.onHotelClick = this._onHotelClick.bind(this);
    }
    _onHotelClick(hotel) {
        this.props.onHotelClick(hotel);
    }
	render() {
		var fromCity = this.props.fromCity;
		var fromTime = this.props.fromTime;
		const card = (
			<div >
				<HeaderPart></HeaderPart>
				
				<h1>{fromCity} 在 {fromTime} 的酒店</h1>
				{this.props.listData[fromCity].map((data)=>
					<div style={cardStyle} width="1000" key={data.hotel}>
						<table>
							<tr>
								<th><img src={data.pic}/></th>
								<th width="300">
								<table>
									<tr>
										<td><h2>{data.hotel}</h2></td>
									</tr>
									<tr>
										<td><p>{data.address}</p></td>
									</tr>
								</table>
								</th>
								<th width="100">星级：{data.level}</th>
								<th width="100">评价：{data.score}</th>
								<th width="100"><h2>{data.price}</h2></th>
								<th><Button onClick={()=>{this.onHotelClick(data)}}>选择</Button></th>
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