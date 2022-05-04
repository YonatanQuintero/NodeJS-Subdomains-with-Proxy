const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const options = {
    target: 'https://mydomain.com',
    changeOrigin: true,
    router: {
        'mydomain.com': 'http://localhost:5000',
        'app.mydomain.com': 'http://localhost:5000',
        'admin.mydomain.com': 'http://localhost:5001'
    }
}

const proxy = createProxyMiddleware(options)

// mount `proxy` in web server
const app = express();
app.use('/', proxy);
app.listen(80);