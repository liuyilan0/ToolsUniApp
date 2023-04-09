<template>
	<view>
		<view class="search-view">
			<input class="search" :placeholder="placeholderTitle" :data-id="placehodlerId" confirm-type="search" @click="clickInput"/>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeSearch',
		data() {
			return {
				searchKeyList: this.searchKeyListProp,
				placeholderTitle: '',
				placehodlerId: ''
			};
		},
		props: {
			searchKeyListProp:{
				type: Array,
				default: function(e){
					return []
				}
			}
		},
		watch: {
			searchKeyList: function() {
				const searchKey = this.searchKeyList[0]
				this.placeholderTitle = '大家都在搜 ' + searchKey.words
				this.placehodlerId = searchKey.id
			}
		},
		methods: {
			// 点击输入框
			clickInput(e) {
				this.$emit('clickSearch', e.target.dataset.id)
			}
		},
		mounted() {
			var that = this
			
			this.placeholderTitle = '大家都在搜 ' + this.searchKeyList[0].words
			this.placehodlerId = this.searchKeyList[0].id
			
			// const arr = that.searchKeyList
			// const lastObj = arr.shift()
			// arr.push(lastObj)
			// that.searchKeyList = arr
		}
	}
</script>

<style lang="stylus" scoped>
	.search-view
		display: flex
		justify-content: center
		height: 60rpx
		line-height: 60rpx
		padding: 0 20rpx
		margin: 10rpx 20rpx
		.search
			width: 100%
			height: 100%
			padding: 0 60rpx
			border-radius: 30rpx
			font-size: 26rpx
			background: #F1F2F3
			background-image: url(../../../static/images/search_home.png)
			background-repeat: no-repeat
			background-position: 18rpx 14rpx
			background-size: 34rpx 34rpx
</style>
