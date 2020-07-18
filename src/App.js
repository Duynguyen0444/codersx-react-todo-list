import React, { Component } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';
import TabMenu from './Components/TabMenu/TabMenu';

class App extends Component {

	render() {
		return (
			<div className="container">
				{/* <TodoItem title="Name A" />
				<TodoItem title="Make Dinner" />
				<TodoItem title="Name A" /> */}

				<TabMenu title="HOME" icon="home"/>
				<TabMenu title="DEALS" icon="gift-outline" />
				<TabMenu title="UPLOADS" icon="cloud-upload-outline"/>				
				<TabMenu title="WORK" icon="cafe-outline" />
				<TabMenu title="SETTINGS" icon="settings-outline" />
			</div>
		);
	}
}

export default App;
