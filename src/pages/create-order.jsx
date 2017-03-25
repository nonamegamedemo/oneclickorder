import React, { Component }from 'react';
import {CreateOrderOverview} from './create-order-overview';
import {CreateOrderDetail} from './create-order-detail';
import {CreateOrderPassenger} from './create-order-passenger';
import {CreateOrderController} from './create-order-controller';
import {Container, Icon, Header, Segment, Label}       from 'semantic-ui-react';

import {HeaderPart} from '../components/header';

export class CreateOrder extends Component {
    render() {
        if (!this.props.orderData) return null;

        console.log(this.props.orderData.passengers);
        return (
            <Container className='createOrderContainer'>
                <Segment color="blue">
                    <HeaderPart></HeaderPart>
                    
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='calendar' circular></Icon>
                        <Header.Content>
                            旅行日程
                        </Header.Content>
                    </Header>

                    <div style={{marginBottom: "10px"}}>
                        <Label as="teal" color="teal" tag>交通、住宿快速浏览</Label>
                    </div>

                    <CreateOrderOverview route={this.props.route} onClickFlight={this.props.onClickFlight} />
                    
                    <div style={{marginBottom: "10px"}}>
                        <Label as="teal" color="teal" tag>出行明细表</Label>
                    </div>

                    <CreateOrderDetail route={this.props.route} detail={this.props.detail} />
                    
                    <CreateOrderPassenger passengers={this.props.orderData.passengers} />
                    
                    <CreateOrderController isRelax={!!this.props.orderData.isRelax} totalPrice={this.props.orderData.totalPrice} onSaveClick={this.props.onSaveClick} onRelaxChanged={this.props.onRelaxChanged}/>
                </Segment>
            </Container>
        );
    }
}

CreateOrder.propTypes = {
    route: React.PropTypes.array,
    detail: React.PropTypes.object,
    orderData: React.PropTypes.object,
    onRelaxChanged: React.PropTypes.func.isRequired,
    onClickFlight: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
}