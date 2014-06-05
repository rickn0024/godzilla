Router.configure({
layoutTemplate: 'tLayout'
});
 
Router.map(function() {
this.route('tHome', {path: '/'});
this.route('tAbout', {path: '/about'});
this.route('tContact', {path: '/contact'});
});