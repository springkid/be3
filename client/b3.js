// Subscribe to the publication
Meteor.subscribe('projects');


// Routing
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('navbar', {to: 'navbar'});
  this.render('projects', {to: 'content'});  
});