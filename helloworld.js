let reactApp = React.createElement;

class HelloWorld extends React.Component{

	constructor(props){
		super(props);
		this.state = { user : 'ZACK'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({user : e.target.value});
	}
	
render(){
	let name = this.state.user;
	let handle = this.handleChange;
	console.log("Name : ",this.state.user);
	return reactApp(
		'input', {onChange:handle, value:name}
	
	);
}

}

ReactDOM.render(reactApp(HelloWorld), document.getElementById('renderApp'));