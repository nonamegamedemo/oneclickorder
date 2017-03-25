import React, { Component } from 'react';
import tourListData from '../mocha-data/tour.js';
import {Router, Route, IndexRoute, browserHistory, RouterContext} from 'react-router';

import {ToursRecommendContainer} from './tours-recommend-container';
import {OrdersContainer} from './orders-container';
import {HeaderPart} from '../components/header';

import { Container, Icon, Segment } from 'semantic-ui-react'

export class ToursContainer extends Component {
    render() {
    	const listData = tourListData.tourList;
        return (
            <CardList listData={listData}/>
        );
    }
}

class UserIcon extends Component {
	render() {
		return(
			<Icon.Group>
				<Icon name='user outline' />
			</Icon.Group>
		);
	}
}

class CalenderIcon extends Component {
	render() {
		return(
			<Icon.Group>
				<Icon name='calendar outline' />
			</Icon.Group>
		);
	}
}

class EyeIcon extends Component {
	render() {
		return(
			<Icon.Group>
				<Icon name='eye' />
			</Icon.Group>
		);
	}
}

class HeartIcon extends Component {
	render() {
		return(
			<Icon.Group>
				<Icon color='orange' name='star' />
			</Icon.Group>
		);
	}
}

class CommentIcon extends Component {
	render() {
		return(
			<Icon.Group>
				<Icon name='commenting outline' />
			</Icon.Group>
		);
	}
}

class CardList extends Component {
	render() {

		const card = (
			<Container className='createOrderContainer'>
				<Segment color="blue">
					<HeaderPart></HeaderPart>
					<div>
						{this.props.listData.map((data) => 
							<div style={cardStyle} key={data.tourPassId}>
								<div style={floatLeft}>
									<div style={{position: "relative", margin: "10px"}}>
										<span style={cityLabelStyle}>{data.tourCity}</span>
										<img style={imgStyle} src={data.imgURL} />
									</div>
								</div>
								<div style={rightContent}>
									<div>
										<h1 onClick={this._handleClick}>
											<a href={data.detailURL} style={title}>{data.title}</a>
										</h1>
									</div>
									<div>
										<span style={author}>
											<UserIcon/>{data.author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<CalenderIcon/>发布于&nbsp;{data.publicTime}</span>
									</div>
									<div style={content}>
										<p onClick={this._handleClick}>{data.content}</p>
									</div>
									<div style={{color: "#999999", marginTop: "5px"}}>
										<EyeIcon/>{data.read}&nbsp;&nbsp;&nbsp;
										<CommentIcon/>{data.comments}&nbsp;&nbsp;&nbsp;
										<HeartIcon/>{data.favorite}&nbsp;&nbsp;&nbsp;
									</div>
								</div>
							</div>
						)}
					</div>
				</Segment>
			</Container>
		);

		return (
			<div>
				{card}
			</div>
		);
	}
}

const floatLeft = {
	float: "left"
}

const cardStyle = {
	width: "880xpx",
	height: "200px",
	border: "1px solid black",
	margin: "10px 0px",
	border: "1px solid #ddd",
	background: 'white',
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

const rightContent = {
	width: "840px",
	
	height: "auto",
	float: "right",
};

const title = {
	width: "830px",
	fontSize: "18px",
	color: "#00a7e1",
	linehight: "18px",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	padding: "0px 20px 0px 0px",
};
const author = {
	color: "#999999",
	fontSize: "12px",
};

const content = {
	width: "630px",
	// background: "blue",
	marginTop: "10px",
	fontSize: "14px",
	linehight: "14px",
};

const tourWrap = {
	width: "880px",
	height: "auto",
	margin: "0 auto",
	background: '#f2f2f2',
	float: "right",
};

const sidebar = {
	width: "280px",
	height: "458px",
	background: "white",
	border: "1px solid #ddd",
	float: "left",
	margin: "10px 0px",
};

const top = {
	fontSize: "18px",
	padding: "5px 0px 10px 10px",
	color: "#333333",
};

const ul = {
	listStyle: "none",
};

const li = {
	fontSize: "14px",
	color: "#666666",
	padding: "10px 10px",
};

const wrap = {
	width: "1180px",
	height: "auto",
	clear: "both",
	margin: "0 auto",
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