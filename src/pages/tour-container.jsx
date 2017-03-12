import React, { Component } from 'react';

export class TourContainer extends Component {
    render() {
        return (
            <div>tour container {this.props.params.tourid}</div>
        );
    }
}
