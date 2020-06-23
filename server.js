const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Force HTTPS.
app.use((req, res, next) => {
  if(req.hostname !== "localhost" && req.get("X-Forwarded-Proto") !== "https") {
    res.redirect("https://" + req.host + req.originalUrl);
  } else {
    next();
  }
});

// Serve Static Files.
app.use(express.static("static"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
});
