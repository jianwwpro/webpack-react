var React = require("react");
var Hello = React.createClass({
	getInitialState: function(){
		return {
			name:'Jack'
		}
	},
	handleChange: function(event){
		this.setState({name:event.target.value});
	},
	render: function(){
		var name = this.state.name;
		return (<div>
			<input type="text" value={name} onChange={this.handleChange} />
			<p>Hello,{name}！</p>
			</div>);
	}
});

module.exports = Hello