<template>
	<view class="container">
		<view class="address_view default_bg_color">
			{{locationAddress}}
		</view>
		<discover-item :dataList="discoverData"></discover-item>
		<!-- <view class="publish_view" @click="publishClick">发布</view> -->
		<!-- <discover-publish-type class="publish_type_view" v-if="publishTypeShow" v-on:publishTypeCancelClick="publishTypeCancelClick"></discover-publish-type> -->
	</view>
</template>

<script>
	// 引入SDK核心类
	var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
	var qqmapsdk;
	var app = getApp();
	
	import discoverData from '@/static/mock/discover.json'
	import DiscoverItem from 'pages/discover/components/discoverItem.vue'
	import DiscoverPublishType from 'pages/discover/components/discoverPublishType.vue'
	
	export default {
		data() {
			return {
				locationAddress: '',
				discoverData: discoverData.result.data,
				publishTypeShow: false
			}
		},
		components: {
			DiscoverItem,
			DiscoverPublishType
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: '发现'
			});
		},
		mounted() {
			
		},
		methods: {
			publishClick() {
				this.publishTypeShow = true
			},
			publishTypeCancelClick() {
				this.publishTypeShow = false
			}
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		onLoad() {
			var _self = this
			
			// 实例化API核心类
			qqmapsdk = new QQMapWX({
				key: app.globalData.qqmapsdkKey
			});
			
			uni.getLocation({
				type: 'gcj02', 
				success: function(res) {

					const latitude = res.latitude
					const longitude = res.longitude
			
					qqmapsdk.reverseGeocoder({
						location: {
							latitude: latitude,
							longitude: longitude
						},
						success: function(res) {
							_self.locationAddress = res.result.address
						},
					})
				}
			});
		}
	}
</script>

<style lang="stylus">
	.container 
		width: 100%
		.address_view
			margin: 16upx 20upx
			padding: 10upx 14upx
			border-radius: 10upx
			font-size: 30upx
			color: #FFFFFF
		.publish_view
			position: fixed
			bottom: 60upx
			right: 30upx
			background: #DC3228
			color: #FFFFFF
			text-align: center
			font-size: 28upx
			width: 120upx
			height: 120upx
			line-height: 120upx
			border-radius: 60upx
		.publish_type_view
			position: fixed
			top: 0
			right: 0
			left: 0
			bottom: 0
</style>
