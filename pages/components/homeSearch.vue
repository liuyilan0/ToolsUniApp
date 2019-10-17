<template>
	<view>
		<view class="search-view">
			<input class="search" placeholder="大家都在搜 英雄联盟十周年" confirm-type="search"/>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeSearch',
		data() {
			return {
				searchKeyList: [
					{
						id: '1', content: ''
					}
				]
			};
		}
	}
</script>

<style lang="stylus" scoped>
	.search-view
		display: flex
		justify-content: center
		height: 60upx
		line-height: 60upx
		padding: 0 20upx
		margin: 10upx 20upx
		.search
			width: 100%
			height: 100%
			padding: 0 60upx
			border-radius: 30upx
			font-size: 26upx
			background: #F1F2F3
			background-image: url(../../static/images/search_home.png)
			background-repeat: no-repeat
			background-position: 18upx 14upx
			background-size: 34upx 34upx
</style>
