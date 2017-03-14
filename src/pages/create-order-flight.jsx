import React, { Component } from 'react';
import dateFormat from 'dateformat';

export class CreateOrderFlight extends Component {
    render() {
        return (
            <div>
                <h6>飞机</h6>
                <p>航班号：{this.props.content.flightNo}</p>
                <p>出发时间：{dateFormat(this.props.content.departure, 'yyyy-mm-dd HH:MM:ss')}</p>
                <p>到达时间: {dateFormat(this.props.content.arrive, 'yyyy-mm-dd HH:MM:ss')}</p>
            </div>
        );
    }
}

// CreateOrderFlight.PropTypes = {
//     content: React.PropTypes.object.isRequired
// };