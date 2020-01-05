<template>
	<view class="container">
		<block v-for="(item, index) of topNewsList" :key='index'>
			<!-- <navigator :url='"/pages/detail/detail?id=" + item.id+"&webUrl="+item.webUrl'> -->
				<view class="header-view">{{newsTitle}}</view>
				<view class="detail-view">
					<image class="image-view" :src="item.imgUrl"></image>
					<view class="news-view">
						<view class="hot">
							<image class="image" src="/static/images/hot_home.png"></image>
							<label>{{item.hot}}热度</label>
						</view>
						<view class="title">{{item.title}}</view>
					</view>
				</view>
				<view class="intro-view">
					{{item.detail}}
				</view>
			<!-- </navigator> -->
		</block>
	</view>
</template>

<script>
	export default {
		name: 'HomeTopNews',
		data () {
			return {
				
			};
		},
		props: {
			newsTitle: String,
			topNewsList: Array
		}
	}
</script>

<style lang="stylus" scoped>
	.container 
		display: flex
		flex-direction: column
		margin: 10upx 20upx 4upx 20upx
		border-bottom: 1upx solid #C0C0C0
		.header-view
			font-size: 36upx
			font-weight: 900
			margin-left: 10upx
		.detail-view
			font-size: 30upx 
			margin: 15upx 0
			position: relative
			.image-view
				width: 100%
				border-radius: 10upx
			.news-view
				position: absolute
				left: 25upx
				right: 25upx
				bottom: 20upx
				color: white
				.hot
					font-size: 26upx
					height: 72upx
					display: flex
					align-items: center
					.image 
						width: 44upx
						height: 44upx
				.title
					margin-top: 10upx
					font-size: 40upx
					font-weight: 900
		.intro-view
			margin: 0 10upx 10upx 10upx
			font-size: 26upx
			color: #555555
			
</style>
