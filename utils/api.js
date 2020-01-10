let API_HOST = "http://xxx.com/xxx"; // 网络请求接口
let DEBUG = true; // 切换数据入口
var Mock = require('./mock.js')

function ajax(data = '', fn, method = "get", header = {}) {
	if (!DEBUG) {
		wx.request({
			url: config.API_HOST + data,
			method: method ? method : 'get',
			data: {},
			header: header ? header : {
				"Content-Type": "application/json"
			},
			success: function(res) {
				fn(res);
			},
		});
		
		// uni.request({
		// 	url: 'https://www.example.com/request'
		// })
		// .then(data => {
		// 	var [error, res] = data;
		// 	console.log(res.data);
		// })
	} else {
		// 模拟数据
		var res = Mock.mock({
			'error_code': '',
			'error_msg': '',
			'data': {
				'pageTitle': '@ctitle(3,8)',
				'newsTitle': '@ctitle(3,8)',
				'noticeText': '您如果有什么好的想法，可以联系我们，我们将提供更好的服务。',
				'searchKeyList|3': [{
					'id|+1': 1,
					'words': '@ctitle(8,18)',
				}],
				'topNewsList|5': [{
					'id|+1': 1,
					'rank|+1': 1,
					'imgUrl': "@image('200x100', '#4A7BF7','#fff','pic')",
					'title': '@ctitle(10,15)',
					'city': "@county(true)",
					'detail': '@ctitle(10,30)',  
					'marketing_start': '@datetime()',
					'marketing_stop': '@now()',
					'hot': '@integer(100,2000)', 
					'original_price': '@integer(100,3000)'
				}],
				'newsList|5': [{
					'id|+1': 1,
					'rank|+1': 1,
					'imgUrl': "@image('200x100', '#4A7BF7','#fff','pic')",
					'title': '@ctitle(10,15)',
					'city': "@county(true)",
					'detail': '@ctitle(10,30)',  
					'marketing_start': '@datetime()',
					'marketing_stop': '@now()',
					'hot': '@integer(100,2000)', 
					'original_price': '@integer(100,3000)'
				}]
			}
		})
		// 输出结果
		fn(res);
	}
}

module.exports = {
	ajax: ajax
}
