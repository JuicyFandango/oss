app.controller('layoutController', function($scope, $rootScope, $mdSidenav,env) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $rootScope.$on('$routeChangeSuccess', function(event, current) {
    $scope.currentLink = getCurrentLinkFromRoute(current);
  });

  $scope.User = {
    "user_id"      : "1869277",
    "username"     : "Ferret",
    "count300"     : "1337",      // Total amount for all ranked, approved, and loved beatmaps played
    "count100"     : "123",       // Total amount for all ranked, approved, and loved beatmaps played
    "count50"      : "69",        // Total amount for all ranked, approved, and loved beatmaps played
    "playcount"    : "42",        // Only counts ranked, approved, and loved beatmaps
    "ranked_score" : "666666",    // Counts the best individual score on each ranked, approved, and loved beatmaps
    "total_score"  : "999999998", // Counts every score on ranked, approved, and loved beatmaps
    "pp_rank"      : "2442",
    "level"        : "50.5050",
    "pp_raw"       : "3113",
    "accuracy"     : "98.1234",
    "count_rank_ss": "54",
    "count_rank_s" : "81",        // Counts for SS/S/A ranks on maps
    "count_rank_a" : "862",
    "country"      : "CL",        // Uses the ISO3166-1 alpha-2 country code naming. See this for more information: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2/wiki/ISO_3166-1_alpha-2)
    "pp_country_rank":"1337",     // The user's rank in the country.
    "events"       : [{           // Contains events for this user
        "display_html"  : "<img src='\/images\/A_small.png'\/>...",
        "beatmap_id"    : "222342",
        "beatmapset_id" : "54851",
        "date"      : "2013-07-07 22:34:04",
        "epicfactor"    : "1"      // How "epic" this event is (between 1 and 32)
    }]
  }

  $scope.profileImageURL = env.USERIMGURL;
});
