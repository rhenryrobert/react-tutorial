/*
* SUBMITTING FORM DATA *
*/
import React from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>#</th>
			</tr>
		</thead>
	)
}

const TableBody = props => {
	const rows = props.rowData.map((row,index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.removeData(index)}>Delete {index}</button>
				</td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}

const Table = props => {
	const { rowData, removeData } = props;

	return (
		<table>
			<TableHeader />
			<TableBody rowData={rowData} removeData={removeData}/>
		</table>
	)
}

export default Table

/*
* STATE *
*/
/*import React from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>#</th>
			</tr>
		</thead>
	)
}

const TableBody = props => {
	const rows = props.rowData.map((row,index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.removeData(index)}>Delete {index}</button>
				</td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}

const Table = props => {
	const { rowData, removeData } = props;

	return (
		<table>
			<TableHeader />
			<TableBody rowData={rowData} removeData={removeData}/>
		</table>
	)
}

export default Table*/

/*
* PROPS *
*/
/*import React,{ Component } from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	)
}

const TableBody = props => {
	const rows = props.rowData.map((row,index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}

class Table extends Component {
	render() {
		const { rowData } = this.props;
		return (
			<table>
				<TableHeader />
				<TableBody rowData={rowData} />
			</table>
		)
		// * Testing with normal js *
		// const hen = this.props.rowData;
		// return (
			// <table>
				// <TableHeader />
				// <TableBody rowDataIn={hen} />
			// </table>
		// )
	}
}

export default Table;*/

/*
* SIMPLE COMPONENTS *
*/
/*import React,{ Component } from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	)
}


const TableBody = () => {
	return (
		<tbody>
			<tr>
				<td>Henry</td>
				<td>Software</td>
			</tr>
			<tr>
				<td>Robert</td>
				<td>TL</td>
			</tr>
		</tbody>
	)
}

class Table extends Component {
	render() {
		return (
			<table>
				<TableHeader />
				<TableBody />
			</table>
		)
	}
}

export default Table*/

/*
* CLASS COMPONENTS *
*/
/*import React,{ Component } from 'react'

class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Job</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Henry</td>
						<td>Software</td>
					</tr>
					<tr>
						<td>Robert</td>
						<td>TL</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Table*/