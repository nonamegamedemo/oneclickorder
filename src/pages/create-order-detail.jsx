import React, { Component } from 'react';
import {Container, Table, Menu, Icon, Popup, Button}   from 'semantic-ui-react';
import _ from 'lodash';

export class CreateOrderDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    _renderDatesHeader(sortedDates) {
        return sortedDates.map((date) => {
            return <Table.HeaderCell key={date}>{date}</Table.HeaderCell>;
        });
    }
    _renderColumns(columns) {
        const maxRows = (_.maxBy(columns, column => column.length)).length;
        let rows = [];

        console.log(maxRows);
        for (let i = 0; i < maxRows; i++) {
            rows.push(<Table.Row key={`row${i}`}>{columns.map((column, idx)=>this._renderCell(i, column, idx + columns.length * i))}</Table.Row>);
        }
        
        return rows;
    }
    _renderCell(rowNum, column, columnAmount) {
        if (column[rowNum]) {
            let data = column[rowNum];
            let content = data.content;
            let icon = data.icon;
            return <Popup
                trigger={<Table.Cell key={`col${columnAmount}`}>{this._renderIcon(icon)}{content}</Table.Cell>}
                content={'详情内容'}
                on='click'
                position='top right'
              />
        } else {
            return <Table.Cell key={`col${columnAmount}`}>&nbsp;</Table.Cell>
        }
    }
    _renderIcon(icon) {
        if (!icon) {
            return <Icon color="violet" name="marker"></Icon>
        }

        let color = this._getColor(icon);
        return <Icon color={color} name={icon} />;

        // switch (icon) {
        //     case 'hotel': 
        //         return <Icon color="pink" name={icon} />
        //     case 'plane':
        //         return <Icon color="blue" name={icon} />
        //     case 'train':
        //         return <Icon color="olive" name={icon} />
        // }
    }
    _getColor(icon) {
        switch (icon) {
            case 'hotel': 
                return 'pink';
            case 'plane':
                return 'blue';
            case 'train':
                return 'olive';
        }

        return 'black';
    }
    _genTableBodyColumns(sortedDates, detail) {
        return sortedDates.map(date => this._genTableBodyColumn(detail[date]));
    }
    _genTableBodyColumn(record) {
        let routesOrderedByCity = record.sortedCities.map(city => {
            let routesInCity = record.cityGroup[city.city];
            return routesInCity.map(route => {return {content: route.item.name, icon: this._getIcon(route.item)};});
        });

        return _.flatten(routesOrderedByCity);
    }
    _getIcon(route) {
        switch(route.type){
            case 'hotel':
                return 'hotel';
            case 'flight':
                return 'plane';
            case 'train':
                return 'train';
        }

        return null;
    }
    render() {
        let detail = this.props.detail;
        let dates = _.keys(detail);
        dates.sort();
        let columns = this._genTableBodyColumns(dates, this.props.detail);

        return (
            <Container>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            {this._renderDatesHeader(dates)}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this._renderColumns(columns)}
                    </Table.Body>
                </Table>
            </Container>
        );
    }
}

CreateOrderDetail.PropTypes = {
    detail: React.PropTypes.object.isRequired
}
