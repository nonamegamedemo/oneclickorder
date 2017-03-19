import React, { Component } from 'react';
import tourListData from '../mocha-data/tour.js';


export class ToursContainer extends Component {
    render() {
    	const listData = tourListData.tourList;
        return (
            <CardList listData={listData}/>
        );
    }
}

class CardList extends Component {
	_handleClick() {
		alert('go to detail page');
	}

	render() {

		const card = (
			<div >
				{this.props.listData.map((data) => 
					<div style={cardStyle} key={data.tourPassId}>
						<div style={{position: "relative"}}>
							<span style={cityLabelStyle}>{data.tourCity}</span>
							<img style={imgStyle} src={data.imgURL} />
						</div>
						<div>
							<div>
								<h1 onClick={this._handleClick}>{data.title}</h1>
							</div>
							<div>
								<p>{data.author}</p>
								<p>{data.publicTime}</p>
							</div>
							<div>
								<p onClick={this._handleClick}>{data.content}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		);

		return (
			<div>
				{card}
			</div>
		);
	}
}

const floatStyle = {
	float: "left"
}

const cardStyle = {
	width: "100%",
	border: "1px solid black",
	margin: "10px",
};

const imgStyle = {
	width: "210px",
	height: "140px"
};

const cityLabelStyle = {
	position: "absolute",
	top: "0",
	left: "0",
	height: "20px",
	background: "rgba(102,102,102,0.9)",
	font: "12px",
	color: "white",
	linehight: "12px",
	padding: "0px 6px 0px 8px"
};

/*const cityLabelAfterStyle = {
	position: "absolute",
	right: "-4px",
	top: "0px",
	width: "0px",
	height: "0px",
	border: "10px solid rgba(102,102,102,0.9)",
	border-color: "rgba(102,102,102,0.9) transparent transparent rgba(102,102,102,0.9);",
	    border-left-width: "2px";
	    border-right-width: "2px";

};*/