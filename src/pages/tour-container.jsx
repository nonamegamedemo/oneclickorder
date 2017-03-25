import React, { Component } from 'react';
import { DateField, Calendar, DatePicker } from 'react-date-picker';
export class TourContainer extends Component {
    constructor(props) {
        super(props);
    }

    _oneClickOrder(tourId) {
        console.log(startTime);
        console.log(tourId);
        if(startTime === ''){
            alert("请选择出行时间");
        }else{
            
        }
	}

    render() {
        let tourId = this.props.params.tourid;
        let url = "/tour-common/" + tourId + "/" + tourId + ".html";
        
        return (<div>
            <div style={datePickerStyle}>
                <DateField
                    dateFormat="YYYY-MM-DD"
                    forceValidDate={true}
                    showClock={false}
                    onChange={(dateString, { dateMoment, timestamp}) => {startTime=dateString;}}               
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

let startTime = "";

const iframeStyle = {
    width: "100%",
    height: "1000px",
    top: "0px",
    position: "absolute"
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