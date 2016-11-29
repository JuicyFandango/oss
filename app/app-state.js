var app = angular.module("app", ["ngMaterial", "ui.router"]);

app.constant("env",{
  "APIKEY"  : "",
  "APIDIR"  : "https://osu.ppy.sh/api/"
});

app.config(function($stateProvider){
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }
  $stateProvider.state(helloState);

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }
  $stateProvider.state(aboutState);

  var devState = {
    name: 'dev',
    url: '/dev',
    templateUrl: 'modules/test.html'
  }
  $stateProvider.state(devState);
});

app.controller('AppCtrl', function($scope) {

});
