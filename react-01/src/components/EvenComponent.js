import React from 'react';

class EvenComp extends React.Component {

	render() {
		return (
	<h1>The counter number {this.props.appCounter} is even</h1>
		)
	}
}

export default EvenComp;