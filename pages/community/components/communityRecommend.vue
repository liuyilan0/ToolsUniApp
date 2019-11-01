<template>
	<view class="container">
		<view class="titleView">
			<view class="leftView">
				<view class="title">{{recommendData.title}}</view>
				<view class="intro">{{recommendData.sub_title}}</view>
			</view>
			<view class="filterView">
				<block v-for="(item,index) of filterViewItemList" :key='index'>
					<view @click="clickFilterView(index)" class="item" :class="{'selected': filterSelectedIndex===index}">{{item}}</view>
				</block>
			</view>
		</view>

		<block v-for="(item, index) in recommendList" :key='index'>
			<view class="contentView">
				<image class="itemImage" :src="item.pic"></image>
				<view class="itemIntro">
					<view>{{item.store_name}}</view>
					<view>{{item.distance}}</view>
				</view>
				<view class="itemInfo">
					<view class="tag">{{item.tag_name}}</view>
					<view class="name">{{item.name}}</view>
				</view>
				<view class="itemPrice">
					<view class="price">
						<text style="font-family: 'KaiTi';">{{item.bottom_price}}</text>
						<text style="font-size: 20upx;">元</text>
					</view>
					<view class="member">{{vipStatus(item.vip_auth)}}</view>
					<view class="discount">优惠{{item.vip_discount}}元</view>
					<view class="buy">购买</view>
				</view>
				<view class="itemRemark">
					<view class="original">原价{{item.original_price}}</view>
					<view>{{item.views}}次查看</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'CommunityRecommend',
		props: {
			recommendData: Object
		},
		data() {
			return {
				filterViewItemList: ['最新','附近'],
				filterSelectedIndex: 0,     // 最新或附近 选中的索引 默认为0和1
			}
		},
		computed: {
			recommendList() {
				return this.recommendData.form_list
			},
			// 会员
			vipStatus() {
				return function(vip_auth) {
					return (vip_auth == 0) ? '黑卡' : (vip_auth == 1 ? '银卡' : '金卡')
				}
			}
		},
		methods: {
			// 点击最新或附近
			clickFilterView(selectedIndex) {
				this.filterSelectedIndex = selectedIndex
			}
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
			.filterView
				position: absolute
				bottom: 0
				right: 16upx
				width: 220upx
				height: 56upx
				line-height: 56upx
				border: 2upx solid rgb(255,220,0)
				border-radius: 10upx
				font-size: 28upx
				font-weight: 400
				-webkit-box-shadow: 0 0 6upx rgb(255,220,0)
				-moz-box-shadow: 0 0 6upx rgb(255,220,0)
				box-shadow: 0 0 6upx rgb(255,220,0)
				background: #FFFFFF
				.item 
					width: 50%
					float: left
					text-align: center
				.selected
					background: rgb(255,220,0)
		.contentView 
			display: flex 
			flex-direction: column 
			font-size 32upx 
			margin: 20upx 0
			.itemImage
				width: 100%
				border-radius: 8upx
			.itemIntro 
				display: flex 
				justify-content: space-between 
				margin-top: 10upx
				padding: 10upx 0
				font-size: 28upx
				color: #808080
			.itemInfo 
				font-size: 30upx
				padding: 10upx 0
				line-height: 60upx
				.tag
					float: left
					padding: 0 10upx
					color: #333333
					background: rgb(255,220,0)
					font-size: 24upx
					border-radius: 6upx
			.itemPrice
				display: flex
				align-items: center
				position: relative
				font-size: 28upx
				.price 
					font-size: 42upx
					color: rgb(255,57,63)
				.member
					margin-left: 16upx
					height: 28upx
					line-height: 28upx
					padding: 10upx 10upx
					border-radius: 10upx
					font-size: 20upx
					color: #FFFFFF
					background: #000000
				.discount
					margin-left: 16upx
					color: #333333
				.buy
					position: absolute
					right: 0
					background: rgb(255,57,63)
					color: #FFFFFF
					width: 116upx
					height: 56upx
					line-height: 56upx
					text-align: center
					border-radius: 16upx
			.itemRemark
				display: flex
				justify-content: space-between 
				font-size: 26upx
				color: #808080
				margin: 16upx 0
				.original 
					text-decoration: line-through
</style>
