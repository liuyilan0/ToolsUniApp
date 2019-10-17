<template>
	<view class="container">
		<uni-notice-bar scrollable="true" single="true" :text="noticeText" speed="70" show-icon="true" @click="noticeClick"></uni-notice-bar>
	</view>
</template>

<script >
	import {UniNoticeBar} from '../../components/notice-bar/uni-notice-bar/uni-notice-bar.vue'
	export default {
		name: 'HomeNoticeBar',
		data () {
			return {
				noticeText: '本期测试将截止到10月30日，给您带来不便，敬请谅解。'
			};
		},
		components: {
			UniNoticeBar
		},
		methods: {
			noticeClick() {
				uni.showToast({
					title:'通知',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container >>> .uni-noticebar
		border-radius: 20rpx
	.container 
		// margin: 0 10upx
		overflow: hidden
</style>
