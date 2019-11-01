<template>
	<view class="container">
		<block v-for="(item,index) of dataList" :key="index">
			<view class="item_view">
				<view class="image_view">
					<image class="image" :src="item.pic"></image>
				</view>
				<view class="info_view">
					<view class="top_view text_ellipsis2">{{item.title}}</view>
					<view class="center_view">
						<view>{{item.start_time}}自动开奖</view>
						<view>x️{{item.total_kucun}}份</view>
					</view>
					<view class="bottom_view">
						<view class="price">
							<text>价值：</text>
							<text>{{item.price}}</text>
							<text>元</text>
						</view>
						<view class="buyBtn" @click="boonClick">免费抽奖</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'BoonList',
		data() {
			return {
				
			}
		},
		props: {
			dataList: Array
		},
		methods: {
			boonClick() {
				
			}
		},
		mounted() {
			console.log(this.dataList)
		}
	}
</script>

<style scoped lang="stylus">
	.container
		background: #FFFFFF
		margin: 20upx 40upx
		padding: 20upx 40upx
		.item_view
			display: flex
			justify-content: flex-start
			border-bottom: 1upx solid #F1F2F3
			.image_view
				width: 30%
				position: relative
				.image
					width: 180upx
					height: 180upx
					position: absolute
					top: 50%
					transform:translateY(-50%)
			.info_view
				width: 60%
				margin: 20upx 30upx
				.top_view
					font-size: 28upx
					font-weight: 400
				.center_view
					margin-top: 14upx
					font-size: 26upx
					color:#555555
				.bottom_view
					margin-top: 14upx
					height: 70upx
					line-height: 70upx
					.price
						display: inline-block
						font-size: 24upx
						color: #555555
					.buyBtn
						float: right
						padding: 0 20upx
						height: 60upx
						line-height: 60upx
						border-radius: 30upx
						color: #FFFFFF
						background: #DC3228
						font-size: 30upx
</style>
