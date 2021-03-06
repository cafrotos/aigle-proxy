const { createProxyMiddleware } = require('http-proxy-middleware');
const app = require('express')();

var forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

app.use(forceSsl);

app.use('/', createProxyMiddleware({ target: 'http://aigle.blife.ai', changeOrigin: false }));

app.listen(process.env.PORT || 3000)