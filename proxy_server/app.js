const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const options = {
    target: 'https://investorcenter.company',
    changeOrigin: true,
    router: {
        'investorcenter.company': 'http://localhost:5000',
        'app.investorcenter.company': 'http://localhost:5000',
        'admin.investorcenter.company': 'http://localhost:5001'
    }
}

const proxy = createProxyMiddleware(options)

// mount `proxy` in web server
const app = express();
app.use('/', proxy);
app.listen(80);