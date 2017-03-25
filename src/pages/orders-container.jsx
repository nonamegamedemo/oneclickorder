import React, { Component } from 'react';
import orderListData from '../mocha-data/order-list.js';
import {HeaderPart} from '../components/header';
import {connect} from 'react-redux';
import {Container, Table} from 'semantic-ui-react';

const mapStateToProps = (state)=>
{
    console.log(state.orders);
    return{ orders:state.orders};
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSaveClick: ()=>{
            dispatch(saveOrder(firstOrder));
            browserHistory.push('/orders');
        },
        onClickFlight: (flight)=>{
            browserHistory.push('/flightList/上海/香港/2017-03-12');
        }
    };
}


class OrderList extends Component{
    _handleClick() {
        alert('continue to submit order');
    }
    _renderOrders(orders) {
        return orders.map((data, i) => {
            return (<Table.Row key={i}>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.orderTitle}</Table.Cell>
                    <Table.Cell>{data.passengers.join(' ')}</Table.Cell>
                    <Table.Cell>{data.travelBeginTime}</Table.Cell>
                    <Table.Cell>{data.travelEndTime} </Table.Cell>
                    <Table.Cell>{data.totalPrice}</Table.Cell>
                    <Table.Cell>订单详情</Table.Cell>
                </Table.Row>);
        });
    }
    render(){
        return (
            <Container style={commonStyle}>
                <HeaderPart></HeaderPart>
                <h1>订单列表</h1>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>订单号</Table.HeaderCell>
                          <Table.HeaderCell>订单名称</Table.HeaderCell>
                          <Table.HeaderCell>旅客</Table.HeaderCell>
                          <Table.HeaderCell>行程开始日期</Table.HeaderCell>
                          <Table.HeaderCell>行程结束日期</Table.HeaderCell>
                          <Table.HeaderCell>总金额</Table.HeaderCell>
                          <Table.HeaderCell>订单详情</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this._renderOrders(this.props.orders)}
                    </Table.Body>
                 </Table>
            </Container>
        );

    }

}

export const OrdersContainer = connect(
        mapStateToProps, null
        // mapDispatchToProps,
    )(OrderList);



const commonStyle ={
    color:" #000",  
};

const ordersStyle = {
    width: "100%",
    border: "1px solid black",
    margin: "10px",
};

