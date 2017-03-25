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
        this.props.onClickFlight(this.props.content);
    }
    render() {
        let departureDate = dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss');
        let arriveDate = dateFormat(this.props.content.arrive, 'yyyy-mm-dd HH:MM:ss');
        return (
            <Step  onClick={this.handleClick}>
                <Icon color='blue' name='plane' />
                <Step.Content>
                    <Step.Title>航班号：{this.props.content.flightNo}</Step.Title>
                    <Step.Description>
                        <p>{this.props.content.from} 至 {this.props.content.to}</p>
                        <p>出发时间 {departureDate} <br /> 到达时间{arriveDate}</p>
                    </Step.Description>
                </Step.Content>
            </Step>
        );
    }
}

CreateOrderFlight.PropTypes = {
    content: React.PropTypes.object.isRequired,
    onClickFlight: React.PropTypes.func.isRequired
};