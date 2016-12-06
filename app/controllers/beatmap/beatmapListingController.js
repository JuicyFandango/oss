app.controller('beatmapListingController', function($scope, $http,$rootScope, env) {

$scope.bmImageURL       = env.BMIMGURL;
$scope.profileImageURL  = env.USERIMGURL

$http.get(env.APIDIR+"/get_beatmaps", {params: {"k" : env.APIKEY , "limit" : 50}})
  .success(function(data){
    $scope.LatestBeatmaps = data;
  }
)

});
