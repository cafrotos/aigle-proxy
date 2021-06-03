const { createProxyMiddleware } = require('http-proxy-middleware');
const app = require('express')();
 
app.use('/', createProxyMiddleware({ target: 'http://aigle.blife.ai', changeOrigin: true }));

app.listen(process.env.PORT || 3000)