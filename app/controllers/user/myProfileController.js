app.controller('myProfileController', function($scope, $rootScope, $http, env) {
  if (typeof $rootScope.User == 'undefined') {
    // Redirect and ask for Login
    console.log("User is undefined!");
  }else{

    // Get recent beatmaps
    $http.get(env.APIDIR+"/get_beatmaps", { params : {
      "k" : env.APIKEY,
      "u" : $rootScope.User.user_id
    }}).success(function(data){
      $scope.UploadedBeatmaps = data;
    });
    // Get recently modded beatmaps -- This should be from my own Database tho


  }
  //Declaring URL for the scope
  $scope.bmImageURL       = env.BMIMGURL;
  $scope.profileImageURL  = env.USERIMGURL
});
