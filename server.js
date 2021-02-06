const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./api/routes');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.json({
  strict: false,
}));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/about', (req, res) => {
  res.send('under construction');
});

app.use(apiRoutes);

app.use((err, req, res) => {
  res.send({
    ok: false,
    error: 'Unexpected server error',
  });
})

app.listen(port);
console.log(`Serving at http://localhost:${port}`);
///
/*
var wsport    = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8765;
const Gun = require('gun');

var wsapp    = express();
wsapp.use(Gun.serve);
wsapp.use(express.static(__dirname));

var server = wsapp.listen(8765);
 
var gun = Gun({	file: 'data/data.json' });

global.Gun = Gun; /// make global to `node --inspect` - debug only
global.gun = gun; /// make global to `node --inspect` - debug only

console.log('Server started on port ' + 8765 + ' with /gun'); 
*/