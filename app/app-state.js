var app = angular.module("app", ["ngMaterial", "ui.router","ngAria"]);
//Routes
app.config(function($stateProvider,$urlRouterProvider){
  var beatmapsState = {
    name        : 'beatmapListing',
    url         : '/beatmap',
    templateUrl : 'views/beatmapListing.html',
    controller  : 'beatmapListingController',
  }
  $stateProvider.state(beatmapsState);

  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'views/user/login.html',
    controller:  'loginController',
  }
  $stateProvider.state(loginState);

  var myProfileState = {
    name: 'myProfile',
    url: '/myProfile',
    templateUrl: 'views/user/profile.html',
    controller:  'myProfileController',
  }
  $stateProvider.state(myProfileState);

  var userProfileState = {
    name: 'userProfile',
    url: '/user/:id',
    templateUrl: 'views/user/profile.html',
    controller:  'userProfileController',
  }
  $stateProvider.state(userProfileState);

  var beatmapDetailState = {
    name: 'beatmap',
    url: '/beatmap/:id',
    templateUrl: 'views/beatmap/beatmapDetail.html',
    controller:  'beatmapDetailController',
  }
  $stateProvider.state(beatmapDetailState);
});

// Angular Material Theme Config
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('indigo').accentPalette('blue').warnPalette('red').backgroundPalette('pink',{
    'default' : '600',
    'hue-1'   : '100',
    'hue-2'   : '600',
    'hue-3'   : '800'
  });
});
