var app = angular.module("app", ["ngMaterial", "ui.router","ngAria"]);
//Routes
app.config(function($stateProvider,$urlRouterProvider){
  var beatmapsState = {
    name        : 'beatmaps',
    url         : '/beatmaps',
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
});

//Global Filters
app.filter('secondsToDateTime', [function() {
  return function(seconds) {
    return new Date(1970, 0, 1).setSeconds(seconds);
  }}]
);

app.filter('beatMapApprovedStatus', [function() {
  return function(status) {
    switch (status) {
      case "-2":
        return "Graveyarded"
      case "-1":
        return "WIP"
      case "0":
        return "Pending"
      case "1":
        return "Ranked"
      case "2":
        return "Approved"
      case "3":
        return "Qualified"
      case "4":
        return "Loved"
    }

  }}]
);

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
