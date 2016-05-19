var bodyParser = require('body-parser');

module.exports = function (app, express) {

var router = express.Router();

  app.use(bodyParser.json());
  app.use('/api/photo', router);

  require('./router.js')(router);

};