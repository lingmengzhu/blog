// 这里配置代理
module.exports = {
    '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
    },
};
