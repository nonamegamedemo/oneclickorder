import React, { Component } from 'react';
import { DateField, Calendar, DatePicker } from 'react-date-picker';
import {HeaderPart} from '../components/header';
import dateformat from 'dateformat';
import {tourScheduleList} from '../mocha-data/tour-schedule';
import {connect} from 'react-redux';
import {createOrder} from '../actions/order-actions';
import {browserHistory} from 'react-router';

const mapDispatchToProps = (dispatch)=>{
    return {
        createOrder: (tourId, startDate) => {
            let tour = tourScheduleList[tourId];

            dispatch(createOrder(tour, startDate));
            browserHistory.push('/createOrder');
        }
    }
}

class TourContainerComp extends Component {
    constructor(props) {
        super(props);
        let now = new Date();
        startTime = dateformat(now, 'yyyy-mm-dd');
        this._onDateFiledChanged = this.onDateFiledChanged.bind(this);
    }

    _oneClickOrder(tourId) {
        console.log(startTime);
        console.log(tourId);
        console.log(this.startDate);

        this.props.createOrder(tourId, this.startDate);
        // let tour = tourScheduleList['3386248'];
        // dispatch(createOrder(tour, startDate));

        if(startTime === ''){
            alert("请选择出行时间");
        }else{
            
        }
	}
    onDateFiledChanged(dateString, { dateMoment, timestamp}) {
        startTime=dateString;
        this.startDate = dateMoment.toDate();
    }
    render() {
        let tourId = this.props.params.tourid;
        let url = "/tour-common/" + tourId + "/" + tourId + ".html";
        return (<div>
            <HeaderPart></HeaderPart>
            <div style={datePickerStyle}>
                <DateField
                    dateFormat="YYYY-MM-DD"
                    forceValidDate={true}
                    date={startTime}
                    defaultValue={+new Date()}
                    showClock={false}
                    onChange={this._onDateFiledChanged}               
                >
                    <DatePicker
                        navigation={true}
                        locale="en"
                        forceValidDate={true}
                        highlightWeekends={true}
                        highlightToday={true}
                        weekNumbers={true}
                        weekStartDay={0}
                    />
                </DateField>
            </div>
            <button onClick={()=>{this._oneClickOrder(this.props.params.tourid)}} style={buttonStyle} className="ui orange button">一键下单</button><iframe style={iframeStyle} src={url}></iframe></div>);
    }
}

export const TourContainer = connect(null, mapDispatchToProps)(TourContainerComp);

let startTime = "";

const iframeStyle = {
	width:"100%",
    height:"1000px",
    top:"60px",
    position:"absolute"
}

const buttonStyle = {
    top: "115px",
    right: "100px",
    position: "absolute",
    zIndex: "1000"
}

const datePickerStyle = {
    top: "130px",
    right: "250px",
    position: "absolute",
    zIndex: "1000"
}