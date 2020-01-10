<template>
	<view class="container">
		<view class="titleView">
			<view class="leftView">
				<view class="title">{{recommendData.title}}</view>
				<view class="intro">{{recommendData.sub_title}}</view>
			</view>
		</view>

		<block v-for="(item, index) in recommendList" :key='index'>
			<view class="contentView">
				<image class="itemImage" :src="item.pic"></image>
				<view class="itemIntro">
					<view>{{item.title}}</view>
					<view>{{item.type}}</view>
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
				
			}
		},
		computed: {
			recommendList() {
				return this.recommendData.form_list
			}
		},
		methods: {
			
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
</style>
