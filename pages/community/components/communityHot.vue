<template>
	<view class="container">
		<view class="titleView">
			<view class="leftView">
				<view class="title">{{hotData.title}}</view>
				<view class="intro">{{hotData.sub_title}}</view>
			</view>
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
						<view class="itemRemark">
							<view>{{item.type}}</view>
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
				.itemRemark
					display: flex
					justify-content: flex-end 
					font-size: 24upx
					color: #808080
					margin: 16upx 0
</style>
