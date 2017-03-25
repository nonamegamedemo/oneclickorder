import React, { Component } from 'react';
import { Button, Checkbox, Input } from 'semantic-ui-react'

export class CreateOrderController extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.onSaveClick = this._onSaveClick.bind(this);
        this.onChange = this._onRelaxChange.bind(this);
    }
    _onRelaxChange(evt, {checked}) {
        this.props.onRelaxChanged(checked);
    }
    _onSaveClick() {
        this.props.onSaveClick();
    }
    render() {
        return (
            <div className='controllersPanel'>
                <div>
                    <span>悠闲: </span>
                    <Checkbox checked={this.props.isRelax} toggle onChange={this.onChange} />
                    <span>出行天数：</span>
                    <Input
                        label={{ basic: true, content: '天' }}
                        labelPosition='right'
                        defaultValue={this.props.duration}
                      />
                </div>
                <div className='submitPanel'>
                    <span>价格: ¥{this.props.totalPrice}</span>
                    <Button color='orange' onClick={this.onSaveClick}>确认订单</Button>
                </div>
            </div>
        );
    }
}

CreateOrderController.PropTypes = {
    duration: React.PropTypes.number.isRequired,
    isRelax: React.PropTypes.bool.isRequired,
    onRelaxChanged: React.PropTypes.func.isRequired,
    totalPrice: React.PropTypes.number.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
}