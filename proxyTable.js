// 这里配置代理
module.exports = {
    '/api': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': '' },
    },
};
