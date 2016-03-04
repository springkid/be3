// Subscribe to the publication
Meteor.subscribe('projects');


// Routing
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('', {to: 'navbar'});
  this.render('welcome', {to: 'content'});
});

Router.route('/projects', function () {
  this.render('navbar', {to: 'navbar'});
  this.render('projects', {to: 'content'});
});

Router.route('/clients', function () {
  this.render('navbar', {to: 'navbar'});
  this.render('clients', {to: 'content'});
});