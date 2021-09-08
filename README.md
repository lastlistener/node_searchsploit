# node_searchsploit
A simple NodeJS wrapper/interface for the command-line utility "SearchSploit."

["searchsploit"](https://github.com/offensive-security/exploitdb) is a command-line tool used in security audits. It enables the user to search a local copy of exploit-db.com and identify public exploits that can be used against vulnerable software packages. 

**node_searchsploit** provides a simple NodeJS interface that wraps the searchsploit command-line utility and allows NodeJS programmers to easily execute searchsploit and handle the output within NodeJS.

For example, the following code is a simple usage showing the NodeJS equivalent of executing "searchsploit --json tomcat".

```javascript
var Searchsploit = require('node_searchsploit');
Searchsploit('tomcat').then(function(result) {
  console.log(result.json.RESULTS_EXPLOIT);
})
```
```
[
  {
    Title: '4D WebSTAR 5.3/5.4 Tomcat Plugin - Remote Buffer Overflow',
    'EDB-ID': '25626',
    Date: '2005-05-06',
    Author: 'Braden Thomas',
    Type: 'remote',
    Platform: 'osx',
    Path: '/usr/share/exploitdb/exploits/osx/remote/25626.c'
  },
  {
    Title: 'Apache 1.3.x + Tomcat 4.0.x/4.1.x mod_jk - Chunked Encoding Denial of Service',
    'EDB-ID': '22068',
    Date: '2002-12-04',
    Author: 'Sapient2003',
    Type: 'dos',
    Platform: 'unix',
    Path: '/usr/share/exploitdb/exploits/unix/dos/22068.pl'
  },
  ...
 ]
```

Alternatively, you can pass searchsploit command line flags to the module as an array; for example, this shows a programmer utilizing the -s (strict) search parameter of searchsploit.

```javascript
Searchsploit(['-s', 'Wordpress Core']).then(function(data) {
	console.log(data.json.RESULTS_EXPLOIT)
})
```
