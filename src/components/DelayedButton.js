// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class DelayedButton extends React.Component{
	constructor(props){
		super(props);
	}

	handleClick = (event) =>{
		event.persist()
		console.log(event) 
		setTimeout(() => {
			this.props.onDelayedClick(event)
		}, this.props.delay)

	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>Click me </button>
			</div>)
	}
}

export default DelayedButton;