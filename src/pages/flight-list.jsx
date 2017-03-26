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
    _onFlightClick(flight, fromCity, toCity, fromTime) {
        this.props.onFlightClick(flight);
    }
	render() {
		let fromCity = this.props.fromCity;
		let toCity = this.props.toCity;
		let fromTime = this.props.fromTime;

		var copiedData = _.cloneDeep(this.props.listData);

		copiedData.map((data) => {
			if(data.from != fromCity) {
				data.departureTerminal = fromCity + data.departureTerminal;
		    	data.arrivalTerminal = toCity + data.arrivalTerminal;
		    	data.departure = fromTime + " " + data.departure;
		    	data.arrive = fromTime + " " + data.arrive;
		    	data.from = fromCity;
		    	data.to = toCity;
	    	}
		});

		const card = (
			<div style={tourWrap} >
				<HeaderPart></HeaderPart>
				<Header as='h2' icon textAlign='center'>
                    <Icon name='plane' color='blue' circular></Icon>
                    <Header.Content>
                        至 {toCity} 的机票
                    </Header.Content>
                    <Header.Subheader>
						{fromTime}
    				</Header.Subheader>
                </Header>
				<Card.Group>
					{copiedData.map((data)=>
						<Card fluid color='blue' header='Option 1' key={data.flightNo}>
							<table width="100%">
								<tr>
									<td>
					                  <Header as='h2'>
									    <Icon name='plane' color='blue' />
									    <Header.Content>
									      {data.company}
										<Header.Subheader>
										{data.flightNo}
										</Header.Subheader>
									    </Header.Content>
									  </Header>
									</td>
									<td width="25%" style={padding10}>
										<Header as='h2' icon="level up" content={data.departureTerminal} subheader={data.departure} />
									</td>
									<td width="10%">
										<td><Icon name='long arrow right' size='huge' color='grey'/></td>
									</td>
									<td width="25%" style={padding10}>
										<Header as='h2' icon="level down" content={data.arrivalTerminal} subheader={data.arrive} />
									</td>
									<th width="100"><h2 style={{color: "#ff7d13"}}><span style={{fontSize: "18px"}}>¥</span>{data.price}</h2></th>
									<td width="10%"><Button color="red" onClick={()=>{this.onFlightClick(data, this.props.fromCity, this.props.toCity, this.props.fromTime)}}>选择</Button></td>
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

const selectBtn = {
	float: "right",
};

const padding10 = {
	padding: "10px 0px",
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