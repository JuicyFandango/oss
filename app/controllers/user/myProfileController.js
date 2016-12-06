app.controller('myProfileController', function($scope, $rootScope, $http, env) {
  console.log($rootScope.User);
  if ($rootScope.User == null) {
    // Redirect and ask for Login
    console.log("User is null");
  }else{

    // Get recent beatmaps

    // Get recently modded beatmaps -- This should be from my own Database tho


  }
  //Declaring URL for the scope
  $scope.bmImageURL       = env.BMIMGURL;
  $scope.profileImageURL  = env.USERIMGURL
});
