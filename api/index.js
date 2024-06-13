const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://registry-1.docker.io',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Host', 'hub.docker.com');
    }
}));

module.exports = app;
