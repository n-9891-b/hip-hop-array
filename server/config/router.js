var bodyParser = require('body-parser');
var requestHandler = ('./request-handler.js');

module.exports = function (app) {

app.post('/recipes', requestHandler.photoHandler);

};
