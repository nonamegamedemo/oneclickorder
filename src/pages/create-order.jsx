import React, { Component }from 'react';
import {CreateOrderOverview} from './create-order-overview';
import {CreateOrderDetail} from './create-order-detail';
import {Container, Icon, Header}       from 'semantic-ui-react';

export class CreateOrder extends Component {
    render() {
        return (
            <Container>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='calendar' circular></Icon>
                    <Header.Content>
                        Travel Route
                    </Header.Content>
                </Header>
                <CreateOrderOverview route={this.props.route} />
                <CreateOrderDetail route={this.props.route} detail={this.props.detail} />
            </Container>
        );
    }
}

CreateOrder.propTypes = {
    route: React.PropTypes.array.isRequired,
    detail: React.PropTypes.object.isRequired
}

// CreateOrder.contextTypes = {
//     route: React.PropTypes.object
// }