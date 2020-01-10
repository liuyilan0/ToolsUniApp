<template>
	<view class="container">
		<view class="titleView">
			{{menuTitle}}
		</view>
		<view class="menuView">
			<block v-for="(item,index) of menuList" :key='index'>
				<view class="menu_container">
					<view class="menu_item shadow_box" @click="menuClick(index)">
						<view class="menu_title">{{item.title}}</view>
						<view class="menu_intro">{{item.intro}}</view>
						<image class="menu_icon" :src="item.pic"></image>
					</view>
					<view v-if="item.tag" class="menu_tag">{{item.tag}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CommunityMenu',
		data() {
			return {
				menuTitle: '一起来看看圈里人分享的东西吧！',
				menuList:[
					{
						"title":"前端技术",
						"intro":"",
						"pic":"/static/images/community_hot.png",
						"tag": "热门"
					},
					{
						"title":"后端技术",
						"intro":"服务器端",
						"pic":""
					},
					{
						"title":"移动端",
						"intro":"移动开发",
						"pic":""
					},
					{
						"title":"小程序",
						"intro":"",
						"pic":"/static/images/community_store.png"
					}
				]
			}
		},
		props: {
			
		},
		methods: {
			menuClick(index) {
				switch(index) {
					case 0:
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						break
					case 1:
						let param = {'id':'1', 'name':'2'}
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						// uni.navigateTo({
						// 	url: '/pages/boon/boon?param=' + encodeURIComponent(JSON.stringify(param))
						// })
						break
					case 2:
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						break
					case 3:
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						break
				}
					
			}
		}
	}
</script>

<style scoped lang="stylus">
	.container
		display: flex 
		flex-direction: column
		margin: 20upx 30upx 30upx 30upx
		.titleView  
			font-size: 40upx 
			font-family: Geneva
			text-align: center
			height: 80upx
			line-height: 80upx
		.menuView
			display: flex
			justify-content: space-between
			align-items: center
			margin-top: 16upx
			height: 140upx
			.menu_container
				width: 22%
				position: relative
				overflow: hidden
				.menu_item
					height: 80upx
					border: 1upx solid #DCDCDC
					margin: 30upx 0
					padding: 10upx 8upx
					border-radius: 10upx
					position: relative
					.menu_title
						font-size: 28upx
						font-weight: bold
					.menu_intro 
						font-size: 22upx
						color: #808080
					.menu_icon
						width: 30upx
						height 30upx
						position: absolute
						right: 10upx
						bottom: -4upx
				.menu_tag
					position: absolute
					top: 0
					right: 6upx
					padding: 6upx 8upx
					font-size: 18upx
					text-align: center
					color: #FFFFFF
					border-radius: 8upx
					background:linear-gradient(123deg,rgba(220,20,60,1) 0%,rgba(240,120,80,1) 61%,rgba(255,217,140,1) 100%)
				
</style>
