<template>
	<view class="container">
		<view class="titleView">
			<view class="leftView">
				<view class="title">{{hotData.title}}</view>
				<view class="intro">{{hotData.sub_title}}</view>
			</view>
			<!-- <view class="rankView" @click="clickRank">
				<image style="float:left; width:38upx; height:38upx;" src="/static/images/community_hot.png"></image>
				<text style="margin-left: 10upx;">热卖排行榜 ></text>
			</view> -->
		</view>
		
		<view class="box">
			<block v-for="(item, index) in hotList" :key='index'>
					<view class="contentView">
						<view class="image_container itemImage">
							<image class="image_box" :src="item.pic"></image>
						</view>
						<view class="itemInfo">
							<view class="text_ellipsis2">{{item.title}}</view>
						</view>
						<view class="itemPrice">
							<view class="price">
								<text style="font-family: 'KaiTi';">{{item.price}}</text>
								<text style="font-size: 20upx;">元</text>
							</view>
							<!-- <view class="member">{{vipStatus(item.vip_auth)}}</view>
							<view class="discount">优惠{{item.save_price}}元</view> -->
						</view>
						<view class="itemRemark">
							<view class="original">{{item.original_price}}</view>
							<view>{{item.views}}次查看</view>
						</view>
					</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CommunityHot',
		props: {
			hotData: Object
		},
		data() {
			return {
				
			}
		},
		computed: {
			hotList() {
				return this.hotData.form_list
			},
			vipStatus() {
				return function(vip_auth) {
					return (vip_auth == 0) ? '黑卡' : (vip_auth == 1 ? '银卡' : '金卡')
				}
			}
		},
		methods: {
			clickRank() {
				
			}
		},
		mounted() {
			// console.log(this.hotList)
		}
	}
</script>

<style scoped lang="stylus">
	.container
		display: flex 
		flex-direction: column
		margin: 10upx 30upx 30upx 30upx
		.titleView
			display: flex 
			justify-content: space-between 
			font-size: 34upx 
			position: relative
			.leftView
				.title 
					font-size: 50upx 
				.intro 
					margin-top: 10upx
					font-size: 28upx 
					color:#808080
			.rankView
				position: absolute
				top: 16upx
				right: 16upx
				font-size: 30upx
				font-weight: 400
				color: #DC3228
		.box 
			display: flex
			flex-flow: row wrap
			justify-content: space-between
			.contentView 
				width: 48%
				font-size: 26upx 
				.itemImage
					margin-top: 16upx
					padding-bottom: 60%
					border-radius: 6upx
				.itemInfo 
					margin-top: 10upx
				.itemPrice
					display: flex
					align-items: center
					position: relative
					overflow: hidden
					font-size: 24upx
					.price 
						font-size: 36upx
						color: rgb(255,57,63)
					.member
						margin-left: 12upx
						height: 24upx
						line-height: 24upx
						padding: 6upx 6upx
						border-radius: 6upx
						font-size: 18upx
						color: #FFFFFF
						background: #000000
					.discount
						position: absolute
						right: 5upx
						bottom: 5upx
						font-size: 24upx
						color: #333333
				.itemRemark
					display: flex
					justify-content: space-between 
					width: 100%
					font-size: 24upx
					color: #808080
					margin: 16upx 0
					.original 
						text-decoration: line-through
</style>
