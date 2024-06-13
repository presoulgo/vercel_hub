const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://hub.docker.com',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Host', 'hub.docker.com');
    }
}));

module.exports = app;
