const path = require("path");
const express = require("express");

const app = express();

app.use(
  express.static(
    path.join(__dirname, "views") //
  )
);

app.get("**", function (req, res) {
  res.send("<h1> Error: Page Not Found</h1>");
});

const port = process.env.PORT || 5236;
app.listen(port);

console.log(`http://localhost:${port}`);
