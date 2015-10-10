Template.navbarlogout.events({
  'click .loginTwitter': function(event) {
  	event.preventDefault();
    Meteor.loginWithTwitter();
  }
});
