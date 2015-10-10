Meteor.startup(function() {
  var site = Meteor.absoluteUrl();
  var local = site.indexOf('localhost') != -1;

  if (local) {
    //Twitter
    Accounts.loginServiceConfiguration.remove({
      service: 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
      service: 'twitter',
      consumerKey: 'mO7Jpb5TqCXBysNJwcLgdGKcc',
      secret: '5AxS6yYUvXuKHxiEHaIIV1w7ayWkqTRhdD6av8FJaEfGhvnyy8'
    });

    //Facebook
    Accounts.loginServiceConfiguration.remove({
      service: 'facebook'
    });

    Accounts.loginServiceConfiguration.insert({
      service: 'facebook',
      appId: '936725806349929',
      secret: '273e009254be0be148b123615a0f5210'
    });

    //Google
    Accounts.loginServiceConfiguration.remove({
      service: 'google'
    });

    Accounts.loginServiceConfiguration.insert({
      service: 'google',
      clientId: '356562250632-n2c8697ko178gjhvt0fe86vr7u27mnei.apps.googleusercontent.com',
      secret: 'Ur4LUolPKZgRXxhY-1_Rnz3C'
    });
  } else {
    // Kadira setup
    //Kadira.connect('MKoNmqT57EETjzGMT', '0a3e2e1c-ffff-4546-b35f-7d0c7ec163ff')

    //Twitter
    Accounts.loginServiceConfiguration.remove({
      service: 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
      service: 'twitter',
      consumerKey: 'AJwiytyw7JkstavtB8dcf6FlC',
      secret: 'ME7gbk4UVwx9KKG5hH3WitI11p8lFDqF17jGgf4llYaj18mhwp'
    });

    //Facebook
    Accounts.loginServiceConfiguration.remove({
      service: 'facebook'
    });

    Accounts.loginServiceConfiguration.insert({
      service: 'facebook',
      appId: '936724819683361',
      secret: 'e4891f8f2e6ab42b64910843a3d1137f'
    });

    //Google
    Accounts.loginServiceConfiguration.remove({
      service: 'google'
    });

    Accounts.loginServiceConfiguration.insert({
      service: 'google',
      clientId: '356562250632-n2c8697ko178gjhvt0fe86vr7u27mnei.apps.googleusercontent.com',
      secret: 'Ur4LUolPKZgRXxhY-1_Rnz3C'
    });
  }
});
