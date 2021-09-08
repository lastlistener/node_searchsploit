var spawn = require('child_process').spawn

function executeSearchsploit(args) {
  return new Promise(function(resolve, reject) {
    var result = {
      rawOutput: '',
      error: '',
      json: {}
    };

    var searchsploitArguments = ['--json'];

    if (Array.isArray(args)) {
      searchsploitArguments = searchsploitArguments.concat(args);
    } else {
      searchsploitArguments.push(args);
    }

    var searchsploitProcess = spawn('searchsploit', searchsploitArguments);

    searchsploitProcess.stdout.on('data', function(data) {
      result.rawOutput += data;
    });

    searchsploitProcess.stderr.on('data', function(error) {
      result.error += error.toString();
    })

    searchsploitProcess.on('close', function() {
      if(result.error) {
        reject(result.error)
      } else {
        result.json = JSON.parse(result.rawOutput);
        resolve(result);
      }
    })
  })
}

module.exports = executeSearchsploit
