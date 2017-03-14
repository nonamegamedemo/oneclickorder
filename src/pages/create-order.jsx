import React, { Component } from 'react';
import {CreateOrderFlight} from './create-order-flight';
import {CreateOrderHotel} from './create-order-hotel';
import {CreateOrderTrain} from './create-order-train';

export class CreateOrder extends Component {
    render() {
        return (
            <div>
                {this.props.route.map((content, idx)=>{
                    switch(content.type){
                        case 'flight': 
                            return <CreateOrderFlight content={content} key={idx} />
                        case 'hotel':
                            return <CreateOrderHotel content={content} key={idx} />
                        case 'train':
                            return <CreateOrderTrain content={content} key={idx} />
                    }
                })}
            </div>
        );
    }
}

CreateOrder.propTypes = {
    route: React.PropTypes.array.isRequired
}

// CreateOrder.contextTypes = {
//     route: React.PropTypes.object
// }