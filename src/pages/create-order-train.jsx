import React, { Component } from 'react';
import dateFormat from 'dateformat';

export class CreateOrderTrain extends Component {
    render() {
        return (
            <div>
                <h6>火车</h6>
                <p>车次号：{this.props.content.trainNo}</p>
                <p>出发时间：{dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss')}</p>
                <p>到达时间: {dateFormat(this.props.content.arrive, 'yyyy-mm-dd HH:MM:ss')}</p>
            </div>
        );
    }
}
