var Iframe = new Mongo.Collection('iframe');
var Overlay = new Mongo.Collection('overlay');

Meteor.publish('iframe', function() {
  return Iframe.find();
});

Meteor.publish('overlay', function() {
  return Overlay.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find({}, {
    fields: {
      profile: 1,
      username: 1,
      services: 1,
      emails: 1
    }
  });
});

Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    user.profile = options.profile;
    var username = options.profile.name;
  } else {
    var username = user.username;
    username = username.toLowerCase();
    user.profile = {};
    user.profile.name = username;
  }

  return user;
});

Meteor.methods({
  updateIframe: function(iframesrc) {
    Iframe.update({
      id: 1
    }, {
      id: 1,
      src: iframesrc
    }, {
      upsert: true
    });
  },
  updateContent: function(contentsrc1, contentsrc2, contentsrc3, contentsrc4) {
    Overlay.update({
      id: 1
    }, {
      id: 1,
      html: contentsrc1
    }, {
      upsert: true
    });

    Overlay.update({
      id: 2
    }, {
      id: 2,
      html: contentsrc2
    }, {
      upsert: true
    });

    Overlay.update({
      id: 3
    }, {
      id: 3,
      html: contentsrc3
    }, {
      upsert: true
    });

    Overlay.update({
      id: 4
    }, {
      id: 4,
      html: contentsrc4
    }, {
      upsert: true
    });
  }
});
