app.controller('myProfileController', function($scope, $rootScope, env) {
  if ($rootScope.User = null) {
    // Redirect and ask for Login
  }else{
    $scope.User = $rootScope.User;
  }
});
