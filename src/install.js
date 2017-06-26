import which from 'which';

function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });
}

export default function (done) {
  const npm = 'yarn';
  runCmd(which.sync(npm), ['install'], function () {
    console.log(npm + ' install end');
    done();
  });
};
