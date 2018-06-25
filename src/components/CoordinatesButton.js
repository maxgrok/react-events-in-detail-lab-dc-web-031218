// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component{
	constructor(props){
		super(props);
	}

	handleClick = (event) =>{
		let array = []
		array.push(event.clientX)
		array.push(event.clientY)
		this.props.onReceiveCoordinates(array);
	}

	render(){
		return(
			<div>
				<button onClick={this.handleClick}>Click me </button>
			</div>
			)
	}
}

export default CoordinatesButton;