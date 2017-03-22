import React, { Component } from 'react';
import {Link} from 'react-router';
import { Button, Menu } from 'semantic-ui-react';

export class ToursRecommendContainer extends Component {
    render() {
        return (
            <div>
                <h1>推荐游记</h1>
                <Menu>
                    <Menu.Item>
                        <Link to="/tours"><Button primary>游记</Button></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/orders"><Button primary>订单列表</Button></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/tours/123"><Button primary>进入游记123</Button></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/createOrder"><Button primary>创建订单</Button></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/flightList/上海/香港/2017-03-12"><Button primary>机票列表-上海到香港</Button></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/hotelList/厦门/2017-03-12"><Button primary>酒店列表-厦门</Button></Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
