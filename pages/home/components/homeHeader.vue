<template>
	<view class="container">
		<view class="content">
			<view class="date-view">
				<label class="day">{{todayDay}}</label>
				<label class="date">{{todayDate}}</label>
			</view>
			<view class="title">{{pageTitle}}</view>
			<image class="category" src="/static/images/category_home.png" @click="categoryClick"></image>
		</view>
		<view class="bottom_line"></view>
	</view>
</template>

<script>
	export default {
		name: 'HomeHeader',
		data() {
			return {
				now: new Date()
			}
		},
		props: {
			pageTitle: String
		},
		computed: {
			todayDay() {
				return this.now.getDate()
			},
			todayDate() {
				return this.now.getFullYear()+ '.' + Number(this.now.getMonth()+1)
			}
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
				font-size: 16upx
				.day 
					font-size: 40upx
					border-bottom: 1upx dashed black
					font-family: 'KaiTi'
				.date
					height: 28upx
					line-height: 28upx
					font-family: 'KaiTi'
			.title
				font-size: 56upx
				font-family: 'KaiTi'
			.category 
				width: 44upx 
				height: 44upx
				line-height: 44upx
				margin-right: 30upx
		.bottom_line
			height: 4upx 
			margin: 6upx 20upx 
			background: black
</style>
