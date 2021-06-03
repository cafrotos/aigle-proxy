const proxy = require('express-http-proxy');
const app = require('express')();
 
app.use('/', proxy('http://aigle.blife.ai'));

app.listen(process.env.PORT || 3000)