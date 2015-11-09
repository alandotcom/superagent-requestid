# superagent-requestid

Set the X-Request-ID header when making requests from [superagent](https://github.com/visionmedia/superagent)

```javascript
var superagent = require('superagent');
var requestId = require('superagent-requestid');

superagent
  .get('http://localhost:3000')
  .use(requestId)
```
