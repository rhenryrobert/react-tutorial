/*
* PULLING IN API DATA *
*/
import React,{ Component } from 'react';
import Api from './Api';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Api />
			</div>
		)
	}
}

export default App;

/*
* SUBMITTING FORM DATA *
*/
/*import React,{ Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
	state = {
		data : []
	}

	removeData = index => {
		const { data } = this.state

		this.setState({
			data: data.filter((d,i) => {
				return i !== index
			})
		})
	}

	handleSubmit = dt => {
		this.setState({
			data: [...this.state.data, dt]
		})
	}

	render() {
		const { data } = this.state
		return (
			<div className="container">
				<Table rowData={data} removeData={this.removeData}/>
				<Form handleSubmit={this.handleSubmit}/>
			</div>
		)
	}
}

export default App;*/

/*
* STATE *
*/
/*import React,{ Component } from 'react';
import Table from './Table';

class App extends Component {
	state = {
		data : [{
			name : 'Henry',
			job : 'Software'
		},{
			name : 'Robert',
			job : 'TL'
		}]
	}

	removeData = index => {
		const { data } = this.state

		this.setState({
			data: data.filter((d,i) => {
				return i !== index
			})
		})
	}

	render() {
		const { data } = this.state
		return (
			<div className="container">
				<Table rowData={data} removeData={this.removeData}/>
			</div>
		)
	}
}

export default App;*/

/*
* PROPS *
*/
/*import React,{ Component } from 'react';
import Table from './Table';


class App extends Component {
	render() {
		const data = [{
			name : 'Henry',
			job : 'Software'
		},{
			name : 'Robert',
			job : 'TL'
		}];

		return (
			<div className='container'>
				<Table rowData={data} />
			</div>
		)
	}
}

export default App;*/

/*
* COMPONENTS *
*/
/*import React,{ Component } from 'react';
import Table from './Table';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Table />
			</div>
		)
	}
}
 
export default App*/