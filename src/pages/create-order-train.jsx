import React, { Component }from 'react';
import dateFormat          from 'dateformat';
import {Step, Icon}        from 'semantic-ui-react';

export class CreateOrderTrain extends Component {
    render() {
        let departureDate = dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss');
        let arriveDate = dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss');
        return (
            <Step>
                <Icon color='olive' name='train' />
                <Step.Content>
                    <Step.Title>车次：{this.props.content.trainNo}</Step.Title>
                    <Step.Description>出发时间 {departureDate} <br /> 到达时间{arriveDate}</Step.Description>
                </Step.Content>
            </Step>
        );
    }
}
