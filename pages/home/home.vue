<template>
	<view>
		<view v-if="homeData">
			<home-notice-bar :noticeText="homeData.noticeText"></home-notice-bar>
			<home-search :searchKeyListProp="homeData.searchKeyList" @clickSearch="searchClick"></home-search>
			<home-header :pageTitle="homeData.pageTitle"></home-header>
			<home-top-news :newsTitle="homeData.newsTitle" :topNewsList="homeData.topNewsList"></home-top-news>
			<home-normal-news :newsList="homeData.newsList"></home-normal-news>
		</view>
		<view v-else class="no-data">
			暂无数据
		</view>
	</view>
</template>

<script>
	import Icon from 'components/icon/uni-icons/uni-icons.vue'
	import HomeStatusBar from 'components/nav-bar/uni-status-bar/uni-status-bar.vue'
	import HomeNavBar from 'components/nav-bar/uni-nav-bar/uni-nav-bar.vue'
	import HomeNoticeBar from 'pages/home/components/homeNoticeBar.vue'
	import HomeSearch from 'pages/home/components/homeSearch.vue'
	import HomeHeader from 'pages/home/components/homeHeader.vue'
	import HomeTopNews from 'pages/home/components/homeTopNews.vue'
	import HomeNormalNews from 'pages/home/components/homeNormalNews.vue'
	const {
		ajax,
		api
	} = require('utils/request')

	export default {
		name: 'Home',
		data() {
			return {
				homeData: null
			}
		},
		methods: {
			// 点击目录视图触发
			operationClick() {
				console.log('更多操作')
			},
			// 点击搜索框触发
			searchClick() {
				uni.navigateTo({
					url: '../search/search'
				})
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
		mounted() {
			ajax(api.home, 'GET', {}).then(data => {
				this.homeData = data;
				console.log('data:', this.homeData);
			})
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="stylus" scoped>
	.no-data {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>