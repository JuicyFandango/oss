var app = angular.module("app", ["ngMaterial", "ui.router","ngAria"]);

//App constants
app.constant("env",{
  "APIKEY"          : "",
  "APIDIR"          : "https://osu.ppy.sh/api/",
  "BMIMGURL"        : "http://b.ppy.sh/thumb/",
  "USERIMGURL"      : "https://a.ppy.sh/"
});

//Routes
app.config(function($stateProvider){
  var profileState = {
    name: 'myProfile',
    url: '/myProfile',
    templateUrl: 'views/beatmapListing.html',
    controller:  'myProfileController'
  }
  $stateProvider.state(profileState);

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }
  $stateProvider.state(aboutState);

  var beatmapsState = {
    name        : 'beatmaps',
    url         : '/beatmaps',
    templateUrl : 'views/beatmapListing.html',
    controller  : 'beatmapListingController'

  }
  $stateProvider.state(beatmapsState);
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

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('indigo').accentPalette('blue').warnPalette('red').backgroundPalette('pink',{
    'default' : '600',
    'hue-1'   : '100',
    'hue-2'   : '600',
    'hue-3'   : '800'
  });
});
