app.controller('layoutController', function($scope,$rootScope, $mdSidenav, env, $stateParams) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $rootScope.USERIMGURL = "https://a.ppy.sh/";
  $rootScope.BMIMGURL   = "http://b.ppy.sh/thumb/";
});
