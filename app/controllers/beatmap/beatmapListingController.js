app.controller('beatmapListingController', function($scope, $http, env, $filter) {
$http.get(env.APIDIR+"/get_beatmaps", {params: {"k" : env.APIKEY , "limit" : 100}})
  .success(function(data){
    $scope.LatestBeatmaps = $filter('uniqueBeatmapSet')(data);;
  }
)
});
