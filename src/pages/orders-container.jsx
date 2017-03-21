import React, { Component } from 'react';
import orderListData from '../mocha-data/order-list.js';

export class OrdersContainer extends Component {
    render() {
    	const listData = orderListData.orderList;
        return (
            <OrderList listData={listData}/>
        );
    }
}

class OrderList extends Component{
	_handleClick() {
		alert('go to order detail ');
	}

	render(){
		const orders = (
			<div >
			 <h1>订单列表</h1>
			 <div style={ordersStyle}>
				 <tabel>
		 			<thead>
		                <tr>
		                    <th width="270px;" >
		                        <label>订单名称</label>
		                     </th>
		                    <th width="180px;">
		                        <div>
		                            <span >类型<i></i></span>	                     
		                        </div>
		                    </th>
		                    <th width="180px;">旅客</th>
		                    <th width="180px;">行程开始日期</th>
		                    <th width="180px;">行程结束日期</th>
		                    <th width="180px;">总金额</th>
		                    <th width="80px;"></th>
		                    <th width="180px;">订单状态</th>
		                    <th width="180px;">操作</th>
		                </tr>
		            </thead>
				 </tabel>
			  </div>

				{this.props.listData.map((data) => 
					<div  style={ordersStyle}>
						<ul>
							<li>
								<h3>
									<label></label>
									<span width="220px;">{data.orderNumberDes}
		   								<a href={data.orderDetailsUrl}  target="_blank">{data.orderId}</a>
		       						 </span>
		       						 &nbsp;&nbsp;&nbsp;
		       						 <span >    {data.orderDateDes}{data.orderDate}</span>
								</h3>
								<table>
									<tbody>
										<tr>
											<td width="280px;">
												<a href={data.orderTitleUrl}  target="_blank">{data.orderTitle}  </a>
											</td>

											<td width="180px;">  {data.orderBizType}  </td>

											<td width="180px;">
												<div>
													<div>{data.passengerNames}</div>
												</div>
											</td>

											<td width="180px;">  {data.travelBeginTime}  </td>

											<td width="220px;">  {data.travelEndTime}  </td>		

											<td width="180px;">
												<span >
													<dfn>{data.currency}</dfn>
													{data.orderPrice}
												</span>												
											</td>	

											<td width="60px;"></td>			

											<td width="180px;">
												<p>{data.orderStatus}</p>
											    <p><a href={data.orderDetailsUrl}  target="_blank">{data.orderDetailsDes}</a></p>
											</td>
											<td width="180px;">
											    <p onClick={this._handleClick}>{data.orderOption}</p>
											</td>

										</tr>
									</tbody>
								</table>
							</li>
						</ul>
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



const ordersStyle = {
	width: "100%",
	border: "1px solid black",
	margin: "10px",
};

