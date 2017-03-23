import React, { Component }from 'react';
import dateFormat          from 'dateformat';
import {Step, Icon}        from 'semantic-ui-react';

export class CreateOrderHotel extends Component {
    render() {
        let checkIn = dateFormat(this.props.content.checkIn, 'yyyy-mm-dd HH:MM:ss');
        let checkOut = dateFormat(this.props.content.checkOut, 'yyyy-mm-dd HH:MM:ss');
        return (
            <Step>
                <Icon name='hotel' />
                <Step.Content>
                    <Step.Title>酒店：{this.props.content.hotel}</Step.Title>
                    <Step.Description>入住时间 {checkIn} <br /> 离店时间{checkOut}</Step.Description>
                </Step.Content>
            </Step>
        );
    }
}
