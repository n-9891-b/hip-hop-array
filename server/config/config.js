

module.exports = function (app, express) {

  app.use(express.static(__dirname + '/../../config/views'));
  app.use('/api/photo', );

};