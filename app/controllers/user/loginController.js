app.controller('loginController', function($scope, $rootScope, $http, env, $mdToast) {
  $scope.login = function(){
    //Future handle of login here
    $http.get(env.APIDIR+"/get_user", {params : { "k" : env.APIKEY, "u" : $scope.user.name}}).success(function(data){
      $rootScope.User = data[0];
      $mdToast.showSimple("Welcome " + $rootScope.User.username);
    });
  }
});
