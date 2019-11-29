var express = require('express');
var app = express();
var path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')))
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});