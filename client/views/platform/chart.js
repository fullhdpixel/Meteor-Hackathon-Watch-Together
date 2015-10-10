Overlay = new Mongo.Collection('overlay');
Iframe = new Mongo.Collection('iframe');
Banned = new Mongo.Collection('banned');
Invites = new Mongo.Collection('invites');

Deps.autorun(function() {
  Meteor.subscribe("invites");
  Meteor.subscribe("iframe");
  Meteor.subscribe("overlay");
  Meteor.subscribe("banned");
  Meteor.subscribe("users");
});

Template.body.events({
  'click #login-buttons-message-dialog': function(event) {
    event.preventDefault();
    $this = $(event.target);
    $this.hide();
  }
});

Template.navbar.events({
  'click #toggleOverlayOne': function(event) {
    event.preventDefault();
    $this = $(event.target);
    var thistext = $this.text();
    if (thistext.toLowerCase() == 'show 1') {
      $('.toggleOverlay').each(function() {
        $(this).text($(this).attr('data-initial'))
      });
      $('.overlay').hide();

      $this.text('Hide 1');
      $('#overlayOne').show();
    } else {
      $this.text('Show 1');
      $('#overlayOne').hide();
    }
  },
  'click #toggleOverlayTwo': function(event) {
    event.preventDefault();
    $this = $(event.target);
    var thistext = $this.text();
    if (thistext.toLowerCase() == 'show 2') {
      $('.toggleOverlay').each(function() {
        $(this).text($(this).attr('data-initial'))
      });
      $('.overlay').hide();

      $this.text('Hide 2');
      $('#overlayTwo').show();
    } else {
      $this.text('Show 2');
      $('#overlayTwo').hide();
    }
  },
  'click #toggleOverlayThree': function(event) {
    event.preventDefault();
    $this = $(event.target);
    var thistext = $this.text();
    if (thistext.toLowerCase() == 'show 3') {
      $('.toggleOverlay').each(function() {
        $(this).text($(this).attr('data-initial'))
      });
      $('.overlay').hide();

      $this.text('Hide 3');
      $('#overlayThree').show();
    } else {
      $this.text('Show 3');
      $('#overlayThree').hide();
    }
  },
  'click #toggleOverlayFour': function(event) {
    event.preventDefault();
    $this = $(event.target);
    var thistext = $this.text();
    if (thistext.toLowerCase() == 'show 4') {
      $('.toggleOverlay').each(function() {
        $(this).text($(this).attr('data-initial'))
      });
      $('.overlay').hide();

      $this.text('Hide 4');
      $('#overlayFour').show();
    } else {
      $this.text('Show 4');
      $('#overlayFour').hide();
    }
  },
  'click #login-dropdown-list': function(event) {
    event.preventDefault();
    $('.dropdown-menu').toggle();
  },
  'click #login-buttons-logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  },
  'click #togglePointerEvents': function(event) {
    event.preventDefault();
    $this = $(event.target);
    var thistext = $this.text();
    if (thistext.toLowerCase() == 'enable resizing') {
      $('.overlay').css({
        'pointer-events': 'inherit'
      });
      $this.text('Disable Resizing');
    } else {
      $('.overlay').css({
        'pointer-events': 'none'
      });
      $this.text('Enable Resizing');
    }
  }
});

Template.navbar.helpers({
  username: function() {
    return (Meteor.user() ? Meteor.users.findOne({
      _id: Meteor.userId()
    }) : 'null');
  },
  undefined: function(id) {
    var html = Overlay.findOne({
        id: id
      }),
      result = '';

    try {
      if (html.html == '' ? result = 'disabled' : result = '');
    } catch (e) {
      result = '';
    }

    return result;
  }
});

Template.chart.helpers({
  overlay: function() {
    var result = Overlay.find().fetch()
    return result;
  },
  source: function() {
    var src = Iframe.find().fetch()[0];
    return src;
  }
});

Template.notfound.rendered = function() {
  Router.go('signup');
}

Template.signup.rendered = function() {
  if (!Session.get('visit')) {
    new WOW().init();
    Session.set('visit', true);
  }
}
