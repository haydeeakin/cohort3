import React from 'react';

class OddComp extends React.Component {

	render() {
		return (
	<h1>The counter number {this.props.appCounter} is odd.</h1>
		)
	}
}

export default OddComp;