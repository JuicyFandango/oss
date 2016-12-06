app.controller('layoutController', function($scope, $rootScope, $http, $mdSidenav, env) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $rootScope.$on('$routeChangeSuccess', function(event, current) {
    $scope.currentLink = getCurrentLinkFromRoute(current);
  });
  
});
