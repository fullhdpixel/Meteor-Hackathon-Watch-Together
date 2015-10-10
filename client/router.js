Router.configure({
  layoutTemplate: 'layout',
  onBeforeAction: function() {
    var page = Router.current().route.path(this);

    if (page == '/chart') {
      $('#placeholder').html('<button id="toggleOverlay" type="button" class="btn btn-default">Show Overlay</button>');
    } else {
      $('#placeholder').html('');
    }
    this.next();
  },
  notFoundTemplate: 'notfound',
  fastRender: true
});

Router.route('/chart', {
  onAfteraction: function() {
    if (typeof Meteor.user()) {
      var user = Meteor.user().profile.username;
      var caret = ' <b class="caret"></b>';
      $('#login-dropdown-list a').html(user + caret);
    }
  }
});

Router.route('/signup');

Router.route('/admin');
