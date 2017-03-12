import React, { Component } from 'react';
import {Link} from 'react-router';

export class ToursRecommendContainer extends Component {
    render() {
        return (
            <div>
                <h1>推荐游记</h1>
                <p>
                    <Link to="/tours">游记</Link>
                </p>
                <p>
                    <Link to="/orders">订单列表</Link>
                </p>
                <p>
                    <Link to="/tours/123">进入游记123</Link>
                </p>
                <p>
                    <Link to="/createOrder">创建订单</Link>
                </p>
            </div>
        );
    }
}
