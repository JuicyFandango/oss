app.controller('layoutController', function($scope, $rootScope, $http, $mdSidenav, env) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $rootScope.$on('$routeChangeSuccess', function(event, current) {
    $scope.currentLink = getCurrentLinkFromRoute(current);
  });

  $http.get(env.APIDIR+"/get_user", {params : {"k" : env.APIKEY , "u" : "1869277" }})
    .success(function(data)
    {
      $scope.User = data[0];
      $rootScope.User = data[0];
      console.log(data[0]);
      $scope.profileImageURL = env.USERIMGURL;
    }
  );
});
