/** @jsx React.DOM */

var React 	= require('react/addons');
var Group 	= require('./Group');
var BS 		= require('react-bootstrap');
var Backbone= require('backbone');
var UI 		= require('touchstonejs').UI;
var utils 	= require('../../utils/common');

var toggleAttributes  	= require('../../mixins/TableViewToggle');
var modeTableView 		= require('../../constants/modeTableView');

module.exports = React.createBackboneClass({
	displayName : 'TableView',

	mixins : [
		toggleAttributes,
		React.BackboneMixin("filter")
	],

	propTypes 	: {
		onSelect 		: React.PropTypes.func,
	    collection  	: React.PropTypes.object.isRequired,
	    factoryItem		: React.PropTypes.func.isRequired,
	    filter 			: React.PropTypes.object,
	    sort 			: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.func ])
	},

	getDefaultProps : function () {
		return {
			/**toggle props**/
			numberColumns 		: 2,
			mode 				: modeTableView.TABLE,
			withToggle 			: true,

			factoryItem 		: utils.null
		}
	},

	getInitialState : function () {
		return {
			collection 	: new Backbone.Collection([], { model : Backbone.Model })
		}
	},

	_applyFilter : function () {
		var filter 		= this.props.filter,
			collection 	= this.props.collection;

		if (filter) {
			var filterObject 	= filter.toJSON(),
				matches 		= utils.createMatches(filterObject),
				items 			= _.pluck(this.props.collection.models, 'attributes'),
				filteredItems 	= utils.filterMatches(items, matches);

			this.state.collection.set( filteredItems )
		} else {
			var items = _.pluck(this.props.collection.models, 'attributes');
			this.state.collection.set( items );
		}
	},

	_applySort : function () {
		var sort = this.props.sort;

		if (sort) {
			this.state.collection.comparator = sort;
			this.state.collection.sort();
		}
	},

	syncCollection : function () {
		this._applyFilter();
		this._applySort();
	},

	_compilingChildAttributes : function (model) {
		if (this.props.withToggle) {
			return this._toggleModeAttributes();	
		}

		return {}
	},

	createChildComponent : function (model) {
		var attrs = this._compilingChildAttributes(model);

		return (<BS.Col {...attrs} key={model.get('id')}>
					{this.props.factoryItem(model, this.props.mode)}
				</BS.Col>)
	},

	render : function () {
		this.syncCollection();

		return (
			<BS.Grid fluid>
				<Group collection={this.state.collection} createChildComponent={this.createChildComponent} componentClass={BS.Row} />
			</BS.Grid>
		)
	}

})