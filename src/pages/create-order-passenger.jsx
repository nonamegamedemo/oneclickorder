import React, { Component } from 'react';
import { Form, Label, Input, Button, Icon } from 'semantic-ui-react'

export class CreateOrderPassenger extends Component {
    renderPassengers() {
        if (this.props.passengers && this.props.passengers.length > 0) {
            return this.props.passengers.map(passenger => {
                return (
                    <span key={passenger}>{passenger}&nbsp;&nbsp;</span>
                );
            });
        }
    }
    render() {
        return (
            <div className="passengersPanel">
                <p>出行人：{this.renderPassengers()}</p>
                <label>输入出行人姓名: </label><Input placeholder='出行人姓名' />
                <Button icon>
                    <Icon name='add' />
                </Button>
            </div>
        );
    }
}

CreateOrderPassenger.propTypes = {
    passengers: React.PropTypes.arrayOf(String).isRequired
};