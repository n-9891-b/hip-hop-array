var plan = require('flightplan');

var appName = 'hip-hop-array';
var username = '';
var startFile = 'server/server.js';
// configuration
var tmpDir = appName + '-' + new Date().getTime();
console.log(process.env.SSH_AUTH_SOCK)
plan.target('production', [
  {
    host: '',
    username: '',
    password: '',
    agent: process.env.SSH_AUTH_SOCK
  },
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote){
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependecies');
  remote.sudo('npm --production --prefix  ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.sudo('~/' + tmpDir + '/node_modules/bower/bin/bower install ~/' + tmpDir + '/bower.json', {user: username});
  remote.sudo('cp -R ~/bower_components/ ~/' + tmpDir + '/client', {user: username});

  remote.log('Reload application');
  remote.sudo('export PORT=80', {user: username});
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/' + appName, {user: username});
  remote.exec('forever stop ~/' + appName + '/' + startFile, {failsafe: true});
  remote.exec('forever start ~/' + appName + '/' + startFile);
});
