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

module.exports = {
	debug,
	bannerRatio,
	info,
}