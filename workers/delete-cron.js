var FileCleaner = require('cron-file-cleaner').FileCleaner;

module.exports = {
  fileWatcher: function() {
    new FileCleaner(__dirname + '/../uploads/', 8 * 10000000,  '0 0 * * *', {
      start: true
    });
  }
}
