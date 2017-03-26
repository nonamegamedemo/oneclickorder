import React, { Component }from 'react';
import {CreateOrderFlight} from './create-order-flight';
import {CreateOrderHotel}  from './create-order-hotel';
import {CreateOrderTrain}  from './create-order-train';
import {Container, Step}   from 'semantic-ui-react';
import _                   from 'lodash';
import ReactDom            from 'react-dom';

export class CreateOrderOverview extends Component {
    constructor() {
        super();
        this.state = {width: 0};
    }
    componentDidMount() {
        setTimeout(() => {
            let list = document.querySelector('.scroller > .steps');
            let last = _.last(list.children);
            let width = last.getBoundingClientRect().right;

            this.setState({listWidth: width});
        });
    }
    render() {
        return (
            <Container className="scroller" >
                <Step.Group size='mini' style={{width: this.state.listWidth, marginBottom: "10px"}}>
                    {this.props.route.map((content, idx)=>{
                        switch(content.type){
                            case 'flight': 
                                return (
                                    <CreateOrderFlight content={content} key={idx} onClickFlight={this.props.onClickFlight} />
                                );
                            case 'hotel':
                                return (
                                    <CreateOrderHotel content={content} key={idx} onClickHotel={this.props.onClickHotel} />
                                );
                            case 'train':
                                return (
                                    <CreateOrderTrain content={content} key={idx} />
                                );
                        }
                    })}
                </Step.Group>
            </Container>
        );
    }
}

CreateOrderOverview.propTypes = {
    onClickHotel: React.PropTypes.func.isRequired,
    onClickFlight: React.PropTypes.func.isRequired,
    route: React.PropTypes.array.isRequired
}