
var friendsData = require("../data/friendsData");



module.exports = function(app) {
     
      app.get("/api/friends", function(req, res) {
            res.json(userData);

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
            //survey results
            // compatibility logic 


     
        // req.body is available since we're using the body-parser middleware
      //   if (tableData.length < 5) {
      //     tableData.push(req.body);
      //     res.json(true);
      //   }
      //   else {
      //     waitListData.push(req.body);
      //     res.json(false);
        
      });

      }

 