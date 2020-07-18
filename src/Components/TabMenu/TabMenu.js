import React, { Component } from 'react';

class TabMenu extends Component {	
	render() {
		return (
			<div className="wrapper">
				{/* <ul className="list">
                    <li> {this.props.title} </li>
                </ul> */}
				<div className="navbar">
					<ul className="nav navbar-nav">
						<li className="active">
							<a href="#" className="wrapper-icon" style={{ display: 'flex', flexDirection: 'column' }}>
								<ion-icon className="icon" name={this.props.icon} style={{ padding: '10px', fontSize: '25px' }} />{' '}
								{this.props.title}
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default TabMenu;
