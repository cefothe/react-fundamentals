import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component{
	render(){
		let txt =this.props.txt
         return <h1>{txt}</h1>;
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps ={
	txt: 'This is the defaul value'
}
 ReactDOM.render(
 	<App cat={6} />,
  	document.getElementById('app')
  )