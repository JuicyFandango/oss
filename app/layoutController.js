app.controller('layoutController', function($scope, $mdSidenav, $stateParams) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
