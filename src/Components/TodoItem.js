import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<ul>
					<li> {this.props.title} </li>				
				</ul>
			</div>
		);
	}
}

export default Header;
