Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('about');

 
Router.route('apidemo');

Router.route('comments');

Router.route('reserve')

Router.route('draw')

Router.route('graphics')

Router.route('Apply');

Router.route('review');
