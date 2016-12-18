app.controller('beatmapDetailController', function($scope, $http, env, $stateParams) {
  $http.get(env.APIDIR+"/get_beatmaps", {params: {"k" : env.APIKEY , "s" : $stateParams.id}})
  .success(function(data){
    $scope.beatmap = data;
  });

  $http.get(env.APIDIR+"/get_user", {params : { "k" : env.APIKEY, "u" : $scope.beatmap.creator}})
  .success(function(data){
    $scope.User = data[0];
  });

});
