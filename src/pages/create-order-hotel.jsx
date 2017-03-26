import React, { Component }from 'react';
import dateFormat          from 'dateformat';
import {Step, Icon}        from 'semantic-ui-react';

export class CreateOrderHotel extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        this.props.onClickHotel(this.props.content);
    }
    render() {
        let checkIn = dateFormat(this.props.content.checkIn, 'yyyy-mm-dd HH:MM:ss');
        let checkOut = dateFormat(this.props.content.checkOut, 'yyyy-mm-dd HH:MM:ss');
        return (
            <Step onClick={this.handleClick}>
                <Icon color='pink' name='hotel' />
                <Step.Content>
                    <Step.Title>酒店：{this.props.content.hotel}</Step.Title>
                    <Step.Description>入住时间 {checkIn} <br /> 离店时间{checkOut}</Step.Description>
                </Step.Content>
            </Step>
        );
    }
}

CreateOrderHotel.PropTypes = {
    content: React.PropTypes.object.isRequired,
    onClickHotel: React.PropTypes.func.isRequired
};