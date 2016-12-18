//Global Filters
app.filter('secondsToDateTime', [function() {
  return function(seconds) {
    return new Date(1970, 0, 1).setSeconds(seconds);
  }}]
);

app.filter('beatMapApprovedStatus',
  [function() {
    return function(status) {
      switch (status) {
        case "-2":
        return "Graveyarded"
        case "-1":
        return "WIP"
        case "0":
        return "Pending"
        case "1":
        return "Ranked"
        case "2":
        return "Approved"
        case "3":
        return "Qualified"
        case "4":
        return "Loved"
      }
    }
  }]
);

app.filter('userImageFilter', [function() {
  return function(userId) {
    if (userId == null) {
      return "user_id";
    }else{
      return userId;
    }
  }}]
);

app.filter('uniqueBeatmapSet', [function(){
  return function(data){
    var collection = [];
    data.forEach(function(beatmap){
      var exists = false;
      collection.forEach(function(collBeatmap){
        if (beatmap.beatmapset_id == collBeatmap.beatmapset_id) {
          exists = true;
          return;
        }
      });
      if (!exists) {
        collection.push(beatmap);
      }
    });
    return collection;
  }
  }]
);
