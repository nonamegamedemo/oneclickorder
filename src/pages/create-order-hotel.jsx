import React, { Component } from 'react';
import dateFormat from 'dateformat';

export class CreateOrderHotel extends Component {
    render() {
        return (
            <div>
                <h6>酒店</h6>
                <p>酒店号：{this.props.content.hotel}</p>
                <p>入住时间：{dateFormat(this.props.content.checkIn, 'yyyy-mm-dd')}</p>
                <p>离店时间: {dateFormat(this.props.content.checkOut, 'yyyy-mm-dd')}</p>
            </div>
        );
    }
}
