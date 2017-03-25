import React, { Component } from 'react';
import flightListData from '../mocha-data/flight.js';
import { Button} from 'semantic-ui-react';
import {selectFlight} from '../actions/order-actions.js';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import { browserHistory } from 'react-router';
import {Card, Icon, Header}       from 'semantic-ui-react';



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
			<div style={tourWrap} >
				<Header as='h2' icon textAlign='center'>
                    <Icon name='plane' circular></Icon>
                    <Header.Content>
                        至 {toCity} 的机票
                    </Header.Content>
                    <Header.Subheader>
						{fromTime}
    				</Header.Subheader>
                </Header>

				<Card.Group>
					{this.props.listData[fromCity][toCity].map((data)=>
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
									<td width="25%">
										<Header as='h2' icon="level up" content={data.departureTerminal} subheader={data.departure} />
									</td>
									<td width="10%">
										<td><Icon name='long arrow right' size='huge' color='grey'/></td>
									</td>
									<td width="25%">
										<Header as='h2' icon="level down" content={data.arrivalTerminal} subheader={data.arrive} />
									</td>
									<td width="100"><Header color="orange" icon="yen" content={data.price}/></td>
									<td width="10%"><Button color="red" onClick={()=>{this.onFlightClick(data)}}>选择</Button></td>
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
}

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