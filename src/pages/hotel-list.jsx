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
				{this.props.listData[fromCity].map((data)=>
					<Card fluid color='blue' header='Option 1' key={data.hotel}>
						<table width="100%">
							<tr>
									<td width="50%">
					                  <Header as='h2'>
									    <Icon name='hotel' color='pink' />
									    <Header.Content>
									      {data.hotel}
										<Header.Subheader>
										{data.address}
										</Header.Subheader>
									    </Header.Content>
									  </Header>
									</td>
								<td width="10%">星级：{data.level}</td>
								<td width="10%">评价：{data.score}</td>
								<td width="100"><Header color="orange" icon="yen" content={data.price}/></td>
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