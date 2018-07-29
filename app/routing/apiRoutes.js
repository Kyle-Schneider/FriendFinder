app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.post("/api/friends/", function(req, res) {
      
  })
   