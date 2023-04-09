<template>
	<view class="container">
		<block v-for="(item,index) of dataList" :key='index'>
			<view class="item_view">
				<view class="userinfo">
					<image class="image" :src="item.avatarUrl"></image>
					<view class="user">
						<view class="name">{{item.nickName}}</view>
						<view class="tag default_bg_color">{{item.typeName}}</view>
					</view>
					<view v-if="item.phone" class="phone" @click="callPhone" :data-phone='item.phone'>
						拨打电话
					</view>
				</view>
				<view class="contentinfo">
					<view class="content" v-html="item.content">
					</view>
					<view class="related">
						<text class="text">{{item.datetime}}</text>
						<text class="text">{{item.readCount}}次浏览</text>
						<text class="text" style="color: #DC3228">{{item.areaName}}</text>
					</view>
				</view>
				<view class="praises">
					<!-- <view class="item" @click="commentClick">评论({{item.commentCount}})</view> -->
					<view style="width: 50%"></view>
					<view class="item" @click="praiseClick(item, $event)">点赞({{item.praiseCount}})</view>
					<view class="item" @click="shareClick">转发({{item.shareCount}})</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'DiscoverItem',
		data() {
			return {
				
			}
		},
		props: {
			dataList: Array
		},
		methods: {
			callPhone(e) {
				if (!e.currentTarget.dataset.phone) {
					uni.showToast({
						title: '对方没有留下电话，您可以评论留言来联系他',
						icon: 'none'
					})
					return
				}
				uni.makePhoneCall({
					phoneNumber: e.currentTarget.dataset.phone
				})
			},
			commentClick () {
				
			},
			praiseClick(data, e) {
				const list = data.praises ? data.praises.data : [];
				uni.navigateTo({
					url: '/pages/discover/praises?dataList=' + encodeURIComponent(JSON.stringify(list))
				})
			},
			shareClick() {
				
			}
		}
	}
</script>

<style scoped lang="stylus">
	.container
		display: flex
		flex-direction: column
		.item_view
			display: flex
			flex-direction: column
			border-bottom: 10upx solid #C8C7CC
			.userinfo
				display: flex
				align-items: center
				margin: 16upx 24upx
				position: relative
				.image
					width: 100upx
					height: 100upx
					border-radius: 20upx
				.user
					margin-left: 20upx
					.name
						font-size: 28upx
					.tag
						font-size: 26upx
						text-align: center
						padding: 8upx 8upx
						margin-top: 10upx
						border-radius: 8upx
						color: #FFFFFF
				.phone
					position: absolute
					right: 16upx
					margin: auto
					
					margin-top: 6upx
					width: 150upx
					height: 46upx
					line-height: 46upx
					border-radius: 23upx
					text-align: center
					background:#4CD964
					color: #FFFFFF
					font-size: 28upx
			.contentinfo
				margin: 16upx 24upx
				.content
					font-size: 30upx
				.related
					margin-top: 20upx
					font-size: 26upx
					.text 
						margin-left: 20upx
			.praises
				display: flex
				justify-content: space-between
				margin: 10upx 20upx
				padding-top: 14upx
				border-top: 1upx solid #F1F2F3
				font-size: 30upx
				height: 60upx
				.item
					text-align: center
					width: 33%
</style>
