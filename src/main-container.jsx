'use strict';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export class MainContainer extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}