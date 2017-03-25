import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router';

export class HeaderPart extends Component {
    constructor(props) {
        super(props);

        var pathName = this._getPathName();

        console.log(pathName);

        this.state = { activeItem: pathName };

        this._handleItemClick = this._handleItemClick.bind(this);
    }

    _getPathName() {
        return location.pathname.split('/')[1];
    }

    _handleItemClick(e, name) {
        this.setState({ activeItem: name.name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
            <Menu pointing secondary>
                <Menu.Item name='tours' active={activeItem === 'tours'} onClick={this._handleItemClick}>
                    <Link to="/tours">游记列表</Link>
                </Menu.Item>
                <Menu.Item name='orders' active={activeItem === 'orders'} onClick={this._handleItemClick}>
                    <Link to="/orders">订单列表</Link>
                </Menu.Item>
            </Menu>
            </div>
        )
    }
}