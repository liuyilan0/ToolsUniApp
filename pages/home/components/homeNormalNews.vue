<template>
	<view class="container">
		<block v-for="(item, index) of newsList" :key='index'>
			<view class="list" :style="(index<newsList.length-1) ? listStyle: ''" @click="itemClick(index)">
				<view class="rank-view" :style="(index<2) ? rankStyle: ''">
					{{item.id}}
				</view>
				<view class="intro-view">
					<label class="title">{{item.title}}</label>
					<label class="hot">{{item.detail}}</label>
				</view>
				<view v-if="item.imgUrl" class="detail-view">
					<image class="image-view" :src="item.imgUrl"></image>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'HomeNormalNews',
		data() {
			return {

			}
		},
		props: {
			newsList: Array
		},
		computed: {
			listStyle() {
				return 'border-bottom: 1px solid #C0C0C0'
			},
			rankStyle() {
				return 'color: red'
			}
		},
		methods: {
			itemClick(index) {
				uni.navigateTo({
					url: '/pages/home/home_detail?path=' + this.newsList[index].webUrl
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container 
		display: flex
		flex-direction: column 
		.list 
			display: flex
			justify-content: flex-start 
			margin: 20rpx 20rpx 0 20rpx 
			.rank-view 
				font-size: 26rpx 
				color: black 
				margin-top: 10rpx 
			.intro-view
				display: flex 
				flex-direction: column 
				min-width: 60% 
				margin: 0 20rpx 10rpx 20rpx 
				.title 
					font-size: 32rpx 
					font-weight: 500 
				.hot
					font-size: 26rpx 
					font-weight: 500 
					color: #808080 
			.detail-view 
				width: 200rpx
				height: 120rpx 
				margin-top: 4rpx 
				.image-view 
					width: 170rpx 
					height: 100% 
					border-radius: 10rpx
</style>
