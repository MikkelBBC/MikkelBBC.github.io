const express = require("express"); // require Express module
const fs = require("fs"); // require File System module

// Create an instance of the Express application
const app = express();
const port = 3001;

// Serve static files from the "frontend" directory
app.use(
  express.static("frontend", {
    index: "index.html",
  })
);

class Udfordring {
  constructor(seed) {
    this.seed = seed;
  }
}

class Kort extends Udfordring {
  constructor(seed, tekst) {
    super(seed);
    this.tekst = tekst;
  }
}

class Spil extends Udfordring {
  constructor(seed, spil) {
    super(seed);
    this.spil = spil;
  }
}
function lavKort(callback) {
  fs.readFile('backend/kort.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      callback(err);
      return;
    }
    const kort = JSON.parse(data);
    callback(null, kort);
  });
}

var i = -1;
app.get("/kortTekst", (req, res) => {
  i++;
  lavKort((err, kortSamling) => {
    res.json(kortSamling[i]);
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
