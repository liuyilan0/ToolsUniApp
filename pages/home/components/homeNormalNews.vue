<template>
	<view class="container">
		<block v-for="(item, index) of newsList" :key='index'>
			<view class="list" :style="(index<newsList.length-1) ? listStyle: ''" @click="itemClick(index)">
				<view class="rank-view" :style="(index<2) ? rankStyle: ''">
					{{item.rank}}
				</view>
				<view class="intro-view">
					<label class="title">{{item.title}}</label>
					<label class="hot">{{item.hot}}</label>
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
			margin: 20upx 20upx 0 20upx 
			.rank-view 
				font-size: 26upx 
				color: black 
				margin-top: 10upx 
			.intro-view
				display: flex 
				flex-direction: column 
				min-width: 60% 
				margin: 0 20upx 10upx 20upx 
				.title 
					font-size: 32upx 
					font-weight: 500 
				.hot
					font-size: 26upx 
					font-weight: 500 
					color: #808080 
			.detail-view 
				width: 200upx
				height: 120upx 
				margin-top: 4upx 
				.image-view 
					width: 170upx 
					height: 100% 
					border-radius: 10upx
</style>
