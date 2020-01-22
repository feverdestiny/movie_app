<template>
	<view class="playhistory">
	<view class="playhistory-head " v-for="item in historyList" :key="item.vod_id">
		<view class="playhistory-head-flex" @click="toPlayer(item)">
			<view class="item1">
				<image class="img" lazy-load="true" :src="item.vod_pic"></image>
			</view>
			<view class="item2">
				<view class="name">{{item.vod_name}}</view>
				<view class="text" style="margin-top: 20upx;">导演：{{item.vod_director}}</view>
				<view class="text">
					主演：{{item.vod_actor}}
				</view>
				<view class="text">年代：{{item.vod_year}}</view>
				<view class="text">评分：{{item.vod_score}}</view>
				<view >已观看 <text class="time">{{item.countTime}}%</text></view>
		<!-- 		<view class="buttom">
					<button @click="setClickPlayer(item)" class="mini-btn" type="warn" size="mini">立即播放</button>
				</view> -->
			</view>
		</view>
	
	</view>
	</view>
</template>

<script>
	export default {
		onShow() {
			this.getStoreInfo();
		},
		data() {
			return {
				historyList: []
			}
		},
		methods: {
	
			getStoreInfo() {
				const self = this;
				uni.getStorage({
					key: 'player:history',
					success: function(res) {
						console.log(res.data);
						self.historyList = res.data.map(item=>{
							const tim1=item.currentTime||0;
							const tim2=item.duration||0;
							item.countTime=(tim1/tim2).toFixed(2)*100||0
							return item
						})
					}
				});
			},
			toPlayer(data){
				uni.navigateTo({
					url: `/pages/movie/player?id=${data.vod_id}&history=${encodeURIComponent(JSON.stringify(data))}`
				});
			}
		}
	}
</script>

<style lang="scss">
	.playhistory {
		&-head {
			padding:  10rpx 20rpx;
			position: relative;
			width: 100%;
			// height: 400upx;
			background: #ffff;
			border-bottom:1upx solid rgba(193, 193, 193, 0.7098039215686275);
		
			&-flex {
				display: flex;
				z-index: 2;
		
				position: relative;
		
				.item1 {
					width: 250upx;
					height:300upx;
					border-radius: 10px;
					// box-shadow: 6px 6px 20px #333;
					background-size: 100% 100%;
		
					.img {
						width: 100%;
						height: 100%;
						display: block;
						border-radius: 5px;
						// box-shadow: 6px 6px 20px #333;
					}
				}
		
				.item2 {
					color: #646464;
					flex: 1;
					min-width: 0;
					padding:0upx 25upx;
					font-size: 27upx;
		
					.name {
						font-size: 40upx;
					}
		
					.text {
						margin: 13upx 0;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
		
		
					}
					.time{
						padding:0 10upx;
						color: #007AFF;
					}
		
					.buttom {
						margin-top: 40upx;
		
						.mini-btn {
							// background-color: #fa8587;
							font-size: 30upx;
							border-radius: 40upx;
							box-shadow: 0 2px 6px rgba(228, 63, 66, 0.2);
							background: linear-gradient(to left, #fa6567 0, #fa8587 100%);
						}
					}
		
				}
			}
		}
		&-box {
			display: flex;

			.box-img {
				width: 300upx;
			}

			.box-info {
				flex: 1;
			}
		}
	}
</style>
