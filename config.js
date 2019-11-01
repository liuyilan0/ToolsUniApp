// api host
let host = 'http://localhost:8080/'

// 是否是调试模式。如果是生产环境，请设置为false
const debug = true

// 横幅图片比例，宽高比，小数或者比例(可以改为从后端接口获取)
const bannerRatio = 825 / 315

// 程序信息，置空则不显示
const info = {
	// "关于我们"的文档标识
	about: 'help/uni-app',
	version: 'v1.0',
	copyright: 'uni-app.CN',
	license: 'Apache 2.0',
	author: 'aliya',
}

// ########################### //
// 以上配置可修改，以下配置不要修改 //
// ########################### //

const api = {
	banners: `${host}/api/v1/banners`,
	register: `${host}/api/v1/register`,
	login: `${host}/api/v1/login`,
}

module.exports = {
	api,
	debug,
	bannerRatio,
	info,
}