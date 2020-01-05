<template>
	<view>
		<home-notice-bar :noticeText="homeData.noticeText"></home-notice-bar>
		<home-search :searchKeyListProp="homeData.searchKeyList" @clickSearch="searchClick"></home-search>
		<home-header :pageTitle="homeData.pageTitle"></home-header>
		<home-top-news :newsTitle="homeData.newsTitle" :topNewsList="homeData.topNewsList"></home-top-news>
		<home-normal-news :newsList="homeData.newsList"></home-normal-news>
	</view>
</template>

<script>
	import Icon from '../../components/icon/uni-icons/uni-icons.vue'
	import HomeStatusBar from '../../components/nav-bar/uni-status-bar/uni-status-bar.vue'
	import HomeNavBar from '../../components/nav-bar/uni-nav-bar/uni-nav-bar.vue'
	
	import HomeNoticeBar from 'pages/home/components/homeNoticeBar.vue'
	import HomeSearch from 'pages/home/components/homeSearch.vue'
	import HomeHeader from 'pages/home/components/homeHeader.vue'
	import HomeTopNews from 'pages/home/components/homeTopNews.vue'
	import HomeNormalNews from 'pages/home/components/homeNormalNews.vue'
	import homeData from '@/static/mock/home.json'
	export default {
		name: 'Home',
		data() {
			return {
				homeData: homeData
			}
		},
		methods: {
			// 点击目录视图触发
			operationClick() {
				console.log('更多操作')
			},
			// 点击搜索框触发
			searchClick() {
				// uni.navigateTo({
				// 	url: '../search/search'
				// })
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
			// uni.request({
			//         url: 'https://www.example.com/request'
			//     })
			//     .then(data => {
			//         var [error, res]  = data;
			//         console.log(res.data);
			//     })
			
			// console.log(homeData)
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
