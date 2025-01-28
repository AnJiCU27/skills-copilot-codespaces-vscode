// Create web server
// 1. Load express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// 2. Load comments
var comments = require('./comments.json');

// 3. Load comments
app.use(bodyParser.json());

// 4. Load comments
app.use(express.static('public'));

// 5. Load comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// 6. Load comments
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  fs.writeFile('./comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
      return;
    }
    res.status(201).send('OK');
  });
});

// 7. Load comments
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
