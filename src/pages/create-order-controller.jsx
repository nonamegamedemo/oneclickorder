import React, { Component } from 'react';
import { Button} from 'semantic-ui-react'

export class CreateOrderController extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.onSaveClick = this._onSaveClick.bind(this);
    }
    _onSaveClick() {
        this.props.onSaveClick();
    }
    render() {
        return (
            <div className='controllersPanel'>
                <span>价格: {this.props.totalPrice}</span>
                <Button onClick={this.onSaveClick}>确认订单</Button>
            </div>
        );
    }
}

CreateOrderController.PropTypes = {
    totalPrice: React.PropTypes.number.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
}