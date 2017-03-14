'use strict';
import React, { Component } from 'react';

export class MainContainer extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}