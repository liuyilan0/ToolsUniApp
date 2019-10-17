<template>
	<view class="container">
		<view class="content">
			<view class="date-view">
				<label class="day">17</label>
				<label class="date">2019.10</label>
			</view>
			<view class="title">热门日报</view>
			<image class="category" src="../../static/images/category_home.png" @click="categoryClick"></image>
		</view>
		<view class="bottom_line"></view>
	</view>
</template>

<script>
	export default {
		name: 'HomeHeader',
		data() {
			return {
				
			};
		},
		methods: {
			categoryClick () {
				wx.showToast({
					title: '切换类别',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container 
		display: flex 
		flex-direction: column 
		.content 
			display: flex 
			flex-direction: row
			justify-content: space-between
			align-items: center
			padding: 15upx 20upx
			.date-view
				display: flex
				flex-direction: column
				margin-left: 30upx
				text-align: center
				font-size: 14upx
				.day 
					font-size: 40upx
					border-bottom: 1upx dashed black
				.date
					height: 28upx
					line-height: 28upx
			.title
				font-size: 50upx
				font-family: 'xionghaiziti'
			.category 
				width: 44upx 
				height: 44upx
				line-height: 44upx
				margin-right: 30upx
		.bottom_line
			height: 4upx 
			margin: 4upx 20upx 
			background: black
</style>
