var TodoView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#item-template').html()),
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this; // enable chained calls
	}
});
// var ListItemView = Backbone.View.extend({

// 	initialize: function () {

// 		_.bindAll(
// 			this,
// 			'onCheckBoxClicked',
// 			'onModelChanged'
// 		);

// 		var listItemTemplate = _.template($('#item-template').html());
// 		this.$el = $(listItemTemplate(this.model.attributes));

// 		this.$textBox = $('#new-todo');
// 		this.$todoList = $('#todo-list');
// 		this.$checkbox = this.$('#check-box');

// 		this.$checkbox.on('click', this.onCheckBoxClicked);
// 		this.model.on('change', this.onModelChanged);

// 	},

// 	onCheckBoxClicked: function() {
// 		if(this.model.get('completed')) {
// 			this.model.set({
// 				completed: false
// 			});
// 		} else
// 			this.model.set({
// 				completed: true
// 			});
// 	},

// 	onModelChanged: function() {
// 		this.$el.toggleClass('item-check-box-striked');
// 	}

// });
