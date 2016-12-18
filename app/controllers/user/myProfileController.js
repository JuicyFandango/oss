app.controller('myProfileController', function($scope, $rootScope, $http, env, $filter) {
  if (typeof $rootScope.USER == 'undefined') {
    // Redirect and ask for Login
    console.log("User is undefined!");
  }else{
    // Get recent beatmaps
    $scope.User = $rootScope.USER;
    $http.get(env.APIDIR+"/get_beatmaps", { params : { "k" : env.APIKEY, "u" : $rootScope.USER.user_id }})
    .success(function(data){
      $scope.UploadedBeatmaps = $filter('uniqueBeatmapSet')(data);
    });
    // Get recently modded beatmaps -- This should be from my own Database tho
  }
});
