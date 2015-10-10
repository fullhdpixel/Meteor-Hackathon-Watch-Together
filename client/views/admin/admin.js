Template.navbaradmin.helpers({
  username: function() {
    return Meteor.user();
  }
});

Template.navbaradmin.events({
  'click #login-dropdown-list': function(event) {
    event.preventDefault();
    $('.dropdown-menu').toggle();
  },
  'click #login-buttons-logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});

Template.admin.rendered = function() {};

Template.admin.helpers({
  users: function() {
    return Meteor.users.find();
  },
  bans: function() {
    return Banned.find();
  },
  invites: function() {
    return Invites.find();
  },
  iframe: function() {
    var src = Iframe.find().fetch()[0];
    return src;
  },
  content: function() {
    var result = Overlay.find().fetch();
    return result;
  }
})

Template.admin.events({
  'submit #frame': function(event, template) {
    event.preventDefault();

    var iframesrc = template.$('[name=source]').val();

    if (validateURL(iframesrc)) {
      Meteor.call('updateIframe', iframesrc, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    } else {
      alert('url is invalid');
    }
  },
  'submit #contentform': function(event, template) {
    event.preventDefault();

    var contentsrc1 = template.$('[name=contentone]').val();
    var contentsrc2 = template.$('[name=contenttwo]').val();
    var contentsrc3 = template.$('[name=contentthree]').val();
    var contentsrc4 = template.$('[name=contentfour]').val();

    Meteor.call('updateContent', contentsrc1, contentsrc2, contentsrc3, contentsrc4, function(error, result) {
      if (error) {
        alert(error);
      }
    });
  }
});

function validateURL(textval) {
  var urlregex = new RegExp(
    "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
  return urlregex.test(textval);
}
