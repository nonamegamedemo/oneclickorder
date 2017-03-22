import React, { Component } from 'react';
export class TourContainer extends Component {
    render() {
        let tourId = this.props.params.tourid;
        let url = "/tour-common/"+tourId+"/"+tourId+".html"
        return <div><button style={buttonStyle} className="ui orange button">一键下单</button><iframe style={iframeStyle} src={url}></iframe></div>
    }
}

const iframeStyle = {
	width:"100%",
    height:"1000px",
    top:"0px",
    position:"absolute"
}

const buttonStyle = {
    top:"100px",
    right:"50px",
    position:"absolute",
    zIndex:"1000"
}