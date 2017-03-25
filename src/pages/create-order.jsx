import React, { Component }from 'react';
import {CreateOrderOverview} from './create-order-overview';
import {CreateOrderDetail} from './create-order-detail';
import {CreateOrderPassenger} from './create-order-passenger';
import {CreateOrderController} from './create-order-controller';
import {Container, Icon, Header}       from 'semantic-ui-react';

import {HeaderPart} from '../components/header';

export class CreateOrder extends Component {
    render() {
        console.log(this.props.orderData.passengers);
        return (
            <Container className='createOrderContainer'>
                <HeaderPart></HeaderPart>
                
                <Header as='h2' icon textAlign='center'>
                    <Icon name='calendar' circular></Icon>
                    <Header.Content>
                        Travel Route
                    </Header.Content>
                </Header>
                <CreateOrderOverview route={this.props.route} onClickFlight={this.props.onClickFlight} />
                <CreateOrderDetail route={this.props.route} detail={this.props.detail} />
                <CreateOrderPassenger passengers={this.props.orderData.passengers} />
                <CreateOrderController totalPrice={this.props.orderData.totalPrice} onSaveClick={this.props.onSaveClick} />
            </Container>
        );
    }
}

CreateOrder.propTypes = {
    route: React.PropTypes.array.isRequired,
    detail: React.PropTypes.object.isRequired,
    orderData: React.PropTypes.object.isRequired,
    onClickFlight: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
}