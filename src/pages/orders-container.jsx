import React, { Component } from 'react';
import orderListData from '../mocha-data/order-list.js';
import {HeaderPart} from '../components/header';
import {connect} from 'react-redux';

// export class OrdersContainer extends Component {
//     render() {
//     	const listData = orderListData.orderList;
//         return (
//             <OrderList listData={listData}/>
//         );
//     }
// }

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

	render(){
		const orders = (
			<div style ={commonStyle} >	
			 <HeaderPart></HeaderPart>						 	
			 <h1>订单列表</h1>			
			 <div style={ordersStyle}>			     
				 <tabel>
		 			<thead>
		                <tr>
		                 	<th width="160px;" >
		                        <label>订单号</label>
		                     </th>
		                    <th width="280px;" >
		                        <label>订单名称</label>
		                     </th>
		                    <th width="160px;">
		                    	<label>类型</label>		                        
		                    </th>
		                    <th width="160px0px;">旅客</th>
		                    <th width="180px;">行程开始日期</th>
		                    <th width="180px;">行程结束日期</th>
		                    <th width="160px;">总金额</th>		
		                    <th width="160px;">订单状态</th>		                   
		                </tr>
		            </thead>
				 </tabel>
			  </div>
				{this.props.orders.map((data) => 
					<div  style={ordersStyle}>
					     <tabel>
		 			<thead>
		                <tr>		              
		                 	<th width="160px;" >
		                        <label><a href="" target="_blank">{data.id}</a></label>
		                     </th>
		                    <th width="280px;" >
		                        <label>{data.flight[0].from} travel to {data.flight[0].to}</label>
		                     </th>
		                    <th width="160px;">
		                    	<label>旅游度假</label>		                        
		                    </th>
		                    <th width="160px;"><div>{data.passengers[0]}</div></th>
		                    <th width="160px;">{data.travelBeginTime}</th>
		                    <th width="180px;">{data.travelEndTime} </th>
		                    <th width="160px;">{data.totalPrice}</th>		  
		                    <th width="160px;"><p><a href="/createOrder"  target="_blank">订单详情</a></p></th>		                   
		                </tr>
		            </thead>
				 </tabel>

						
					</div>
					)}
			</div>
		);

		return (
			<div>
				{orders}
			</div>
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

