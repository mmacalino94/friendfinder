var path = require("path");
var friends = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
       res.json(friends);
  })

app.post("/api/friends", function(req, res) {
  console.log(req.body)
  var bestfriend={
    name: "",
    photo: "",
    friendDifference: Infinity
  }
 
    var newFriend = req.body;
    var newFriendResponses = newFriend.scores;
    var totdiff;


for (var i = 0; i < friends.length; i++) {
var currentfrnd=friends[i];
totdiff=0;
 for (var j = 0; j < currentfrnd.scores.length; j++) {
  var currentFriendScore = currentfrnd.scores[j];
  var currentUserScore = newFriendResponses[j];

  totdiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
  }

  if (totdiff <= bestfriend.friendDifference) {
    bestfriend.name = currentfrnd.name;
    bestfriend.photo = currentUserScore.photo;
    bestfriend.friendDifference = totdiff;
  }
}

friends.push(newFriend);

res.json(bestfriend);
  });
}