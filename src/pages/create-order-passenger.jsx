import React, { Component } from 'react';
import { Form, Label, Input, Button, Icon } from 'semantic-ui-react'

export class CreateOrderPassenger extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.onPassenageInputChange = this._onPassenageInputChange.bind(this);
        this.addPassenger = this._addPassenger.bind(this);
        this.removePassenger = this._removePassenger.bind(this);
    }
    renderPassengers() {
        if (this.props.passengers && this.props.passengers.length > 0) {
            return this.props.passengers.map((passenger, i) => {
                return (
                    <Button
                      icon='close'
                      key={i}
                      label={{ as: 'a', basic: true, content: passenger }}
                      labelPosition='left'
                      onClick={this.removePassenger}
                    />
                );
            });
        }
    }
    _onPassenageInputChange(evt, {value}) {
        this.newPassenger = value;
    }
    _removePassenger(evt, props) {
        this.props.removePassenger(props.label.content);
    }
    _addPassenger() {
        this.props.addPassenger(this.newPassenger);
    }
    render() {
        return (
            <div className="passengersPanel">
                <div>出行人：{this.renderPassengers()}</div>
                <label>输入出行人姓名: </label><Input placeholder='出行人姓名' onChange={this.onPassenageInputChange} />
                <Button icon onClick={this.addPassenger}>
                    <Icon name='add' />
                </Button>
            </div>
        );
    }
}

CreateOrderPassenger.propTypes = {
    removePassenger: React.PropTypes.func.isRequired,
    addPassenger: React.PropTypes.func.isRequired,
    passengers: React.PropTypes.arrayOf(String).isRequired
};