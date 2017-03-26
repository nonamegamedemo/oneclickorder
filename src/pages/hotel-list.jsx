import React, { Component } from 'react';
import hotelListData from '../mocha-data/hotel.js';
import { Button,Card, Icon, Header} from 'semantic-ui-react';

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

		var copiedData = _.cloneDeep(this.props.listData);

		copiedData.map((data) => {
			if (data.city != fromCity) {
				data.city = fromCity;
				data.hotel = fromCity + data.hotel;
				data.address = fromCity + data.address;
			}
		});

		const card = (
			<div style={tourWrap}>
				<HeaderPart></HeaderPart>
				<Header as='h2' icon textAlign='center'>
                    <Icon name='hotel' color='pink' circular></Icon>
                    <Header.Content>
                        {fromCity} 的酒店
                    </Header.Content>
                    <Header.Subheader>
						{fromTime}
    				</Header.Subheader>
                </Header>
                <Card.Group>
				{copiedData.map((data)=>
					<Card fluid color='blue' header='Option 1' key={data.hotel}>
						<table width="100%">
							<tr>
									<td width="50%">
					                  <Header as='h2'>
									    <Icon style={padding10} name='hotel' color='pink' />
									    <Header.Content style={padding10}>
									      {data.hotel}
										<Header.Subheader>
										{data.address}
										</Header.Subheader>
									    </Header.Content>
									  </Header>
									</td>
								<td width="10%">星级：{data.level}</td>
								<td width="10%">评价：{data.score}</td>
								<th width="100"><h2 style={{color: "#ff7d13"}}><span style={{fontSize: "18px"}}>¥</span>{data.price}</h2></th>
								<td width="10%"><Button color='red' onClick={()=>{this.onHotelClick(data)}}>选择</Button></td>
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

const tourWrap = {
	padding: "20px 100px 20px 100px",
};

const cardStyle = {
	width: "100%",
	border: "1px solid black",
	margin: "10px",
};

const img = {
	padding: "10px",
};

const padding10 = {
	padding: "10px",
};