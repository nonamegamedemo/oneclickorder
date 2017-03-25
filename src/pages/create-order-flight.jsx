import React, { Component }from 'react';
import dateFormat          from 'dateformat';
import {Step, Icon}        from 'semantic-ui-react';

export class CreateOrderFlight extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        this.props.onClickFlight();
    }
    render() {
        let departureDate = dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss');
        let arriveDate = dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss');
        return (
            <Step  onClick={this.handleClick}>
                <Icon name='plane' />
                <Step.Content>
                    <Step.Title>航班号：{this.props.content.flightNo}</Step.Title>
                    <Step.Description>出发时间 {departureDate} <br /> 到达时间{arriveDate}</Step.Description>
                </Step.Content>
            </Step>
        );
    }
}

CreateOrderFlight.PropTypes = {
    onClickFlight: React.PropTypes.func.isRequired
};