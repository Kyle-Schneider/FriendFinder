
var friendsData = require("../data/friendsData");



module.exports = function(app) {
     
      app.get("/api/friends", function(req, res) {
            res.json(friendsData);

                        //This will be used to display
                               //  JSON of all possible friends
      });

      // API POST Requests
      // Below code handles when a user submits a form and thus submits data to the server.
      // In each of the below cases, when a user submits form data (a JSON object)
      // ...the JSON is pushed to the appropriate JavaScript array
      // (ex. User fills out a reservation request... this data is then sent to the server...
      // Then the server saves the data to the tableData array)
      // ---------------------------------------------------------------------------
    
      app.post("/api/friends/", function(req, res) {
            
            // here^^^^
            var bestMatch = {
                  name: "",
                  photo: "",
                  friendDifference: Infinity
                };
            
                var userData = req.body;
                var userScores = userData.scores;
            
           
            var totalDifference;

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friendsData.length; i++) {
      var currentFriend = friendsData[i];
      totalDifference = 0;

      console.log(currentFriend.name);
    };
            // compatibility logic 
        // req.body is available since we're using the body-parser middleware     
        
         for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    
      console.log(userData);
      console.log(totalDifference);

    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friendsData.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

    console.log(bestMatch);
  });

}

 