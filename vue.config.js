/*
 * @Description: 
 * @Author: 
 * @Date: 2024-01-14 20:02:29
 */
module.exports = {
    lintOnSave: false, // 关闭eslint校验
    devServer: {
        host: "139.224.72.73",
        //host: "localhost",
        port: 80,
        https: false,
        //proxy: "http://localhost:80",
        proxy: {
            '/': {
                target: 'http://139.224.72.73:9281',
                //target: 'http://localhost:9281',
                changeOrigin: true,
            },
        },
        overlay: { // 关闭eslint校验
            warning: false,
            errors: false
        },
    }
}
//设置代理解决跨域问题