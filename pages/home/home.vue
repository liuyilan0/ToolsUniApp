<template>
	<view>
		<home-status-bar></home-status-bar>
		<home-nav-bar>
			 <view>首页</view>
			 <view slot="left">
				 <icon type="contact" size="26"></icon>
			 </view>
			 <view slot="right"></view>
		</home-nav-bar>
		<home-notice-bar></home-notice-bar>
		<home-search></home-search>
		<home-header></home-header>
		<home-top-news :topNewsList="topNewsList"></home-top-news>
		<home-normal-news :newsList="newsList"></home-normal-news>
	</view>
</template>

<script>
	import Icon from '../../components/icon/uni-icons/uni-icons.vue'
	import HomeStatusBar from '../../components/nav-bar/uni-status-bar/uni-status-bar.vue'
	import HomeNavBar from '../../components/nav-bar/uni-nav-bar/uni-nav-bar.vue'
	import HomeNoticeBar from '../components/homeNoticeBar.vue'
	import HomeSearch from '../components/homeSearch.vue'
	import HomeHeader from '../components/homeHeader.vue'
	import HomeTopNews from '../components/homeTopNews.vue'
	import HomeNormalNews from '../components/homeNormalNews.vue'
	export default {
		name: 'Home',
		data() {
			return {
				topNewsList: [
					{
						"id": "1",
						"rank": "1",
						"title": "英雄联盟S9总决赛3DM专题",
						"detail": "《英雄联盟》S9全球总决赛于10月在柏林正式打响，总决赛于11月10日在巴黎开战，3DM游戏网将为您带来这场赛事的全程战报。",
						"hot": "19.2W",
						"imgUrl": "http://pic2.52pk.com/files/191016/7815820_093423_3903.png",
						'webUrl': "https://uniapp.dcloud.io/static/web-view.html"
					}
				],
				newsList: [
					{
						"id": "2",
						"rank": "2",
						"title": "足协退出中超公司一事今年不会影响中超升降级，明年中超也不会扩军。",
						"hot": "10.1W",
						"imgUrl": "https://c1.hoopchina.com.cn/uploads/star/event/images/191016/1abbe64b658dc57cb67ea52ddfe4df9a92ddb260.png",
						'webUrl': "https://uniapp.dcloud.io/static/web-view.html"
					},
					{
						"id": "3",
						"rank": "3",
						"title": "墨西哥西南部格雷罗州发生枪战，15人死亡。这是几天以来墨西哥爆发的第二次大规模杀戮事件。",
						"hot": "8.1W",
						"imgUrl": "http://img2015.zdface.com/20191016/3d828a833e1b462a1940e62c22babfb7.jpg",
						'webUrl': "https://uniapp.dcloud.io/static/web-view.html"
					},
					{
						"id": "4",
						"rank": "4",
						"title": "《幸福三重奏》第二季要播出了,郎朗和老婆吉娜,要来参加了,这可能是大家见过最接地气的艺术家夫妻了。",
						"hot": "7.2W",
						"imgUrl": "http://img2015.zdface.com/20191016/23aed942bc4d543ae110b242919bc2e0.jpg",
						'webUrl': "https://uniapp.dcloud.io/static/web-view.html"
					},
					{
						"id": "5",
						"rank": "5",
						"title": "“如果没有两弹一星,中国就没有现在这样的国际地位。",
						"hot": "6.7W",
						"imgUrl": "https://edu.online.sh.cn/education/gb/content/attachement/jpeg/site1/20191016/IMGd43d7e5f355652119676570.jpeg",
						'webUrl': "https://uniapp.dcloud.io/static/web-view.html"
					}
				]
			};
		},
		methods: {
			operationClick() {
				console.log('更多操作')
			}
		},
		components: {
			Icon,
			HomeStatusBar,
			HomeNavBar,
			HomeNoticeBar,
			HomeSearch,
			HomeHeader,
			HomeTopNews,
			HomeNormalNews
		},
		mounted () {
			uni.request({
			        url: 'https://www.example.com/request'
			    })
			    .then(data => {
			        var [error, res]  = data;
			        console.log(res.data);
			    })
		}
	}
</script>

<style lang="stylus" scoped>
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	 }
</style>
