<template>
	<view class="detail">
		<view class="detail-head ">
			<view class="detail-head-img blur" :style="{backgroundImage:'url('+setImg(vodInfo)+')'}"></view>
			<view class="detail-head-flex">
				<view class="item1">
					<image class="img" lazy-load="true" :src="setImg(vodInfo)"></image>
				</view>
				<view class="item2">
					<view class="name">{{vodInfo.vod_name}}</view>
					<view class="text" style="margin-top: 20upx;">导演：{{vodInfo.vod_director}}</view>
					<view class="text">
						主演：{{vodInfo.vod_actor}}
					</view>
					<view class="text">年代：{{vodInfo.vod_year}}</view>
					<view class="text">评分：{{vodInfo.vod_score}}</view>
					<view class="buttom">
						<button @click="setClickPlayer(vodInfo)" class="mini-btn" type="warn" size="mini">立即播放</button>
					</view>
				</view>
			</view>

		</view>
		<view style="margin-top: 20px;">
			<uni-notice-bar showIcon="true" single="true" text="播放失败或缓慢请在下方切换播放源,若不能播放,可向管理员反馈">
			</uni-notice-bar>
		</view>
		<div class="detail-add">
			<view class="detail-add-head">
				<view class="item1">
					<image class="img" src="/static/sysicon/dong.png"></image>
				</view>
				<view class="item2">
					片源选择
				</view>
			</view>

			<view class="detail-add-main">
				<view :class="['button',item.active?'active':'']" v-for="(item,index) in vodList" :key="index" @click="setActive(item)">{{item.addres}}</view>
			</view>
		</div>

		<div class="detail-add">
			<view class="detail-add-head">
				<view class="item1">
					<image class="img" src="/static/sysicon/dong.png"></image>
				</view>
				<view class="item2">
					选集播放
				</view>
			</view>

			<view class="detail-add-main">
				<view class="button1" v-for="(item,index) in urlList.urlList" :key='index'>{{item.title}}</view>
			</view>
		</div>
	</view>
</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	import mixins from '@/mixins/index.js'
	export default {
		mixins: [mixins],
		components: {
			uniNoticeBar
		},

		data() {
			return {
				vodInfo: {},
				vodList: []
			}
		},
		onLoad: function(option) {
			console.log(option.id);
			this.getVodInfo(option.id)
		},
		computed: {
			urlList() {
				const arr = this.vodList.filter(item => item.active)
				return arr[0] || {}
			}
		},
		methods: {
			async getVodInfo(id) {
				const res = await this.$http.post('movie/dyController/getVodInfo', {
					id: id
				})
				if (res.data && res.data.success) {
					this.vodInfo = res.data.result[0]
					uni.setNavigationBarTitle({
						title: this.vodInfo.vod_name
					})
					this.vodList = this.setVodList(this.vodInfo)
					console.log(this.vodList);
				} else {
					console.log("请求错误");
				}
			},
			setActive(data) {
				this.vodList = this.vodList.map(item => {
					item.active = false;
					if (data.addres == item.addres) item.active = true
					return item
				})
			},
			toPlayer() {
				uni.navigateTo({
					url: '/pages/movie/player'
				});
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		background: #f5f5f5;

		&-head {
			padding: 20rpx;
			position: relative;
			width: 100%;
			height: 400upx;
			background: #ffff;

			&-img {
				position: absolute;
				background: #ccc;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 1;
			}

			&-flex {
				display: flex;
				z-index: 2;

				position: relative;

				.item1 {
					width: 250upx;
					height: 380upx;
					border-radius: 10px;
					box-shadow: 6px 6px 20px #333;
					background-size: 100% 100%;

					.img {
						width: 100%;
						height: 100%;
						display: block;
						border-radius: 10px;
						box-shadow: 6px 6px 20px #333;
					}
				}

				.item2 {
					color: #fff;
					flex: 1;
					min-width: 0;
					padding: 25upx;
					font-size: 27upx;

					.name {
						font-size: 40upx;
					}

					.text {
						margin: 15upx 0;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;


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

		.blur {
			filter: blur(10px);
		}

		&-add {
			margin: 30upx 0;
			padding-bottom: 20upx;
			background: #FFFFFF;

			&-head {
				display: flex;
				padding: 20upx;
				font-size: 30upx;
				height: 50upx;
				line-height: 50upx;

				.item1 {
					width: 60upx;

					.img {
						width: 100%;
						height: 100%;
					}
				}

				.item2 {
					padding-left: 10upx;
					flex: 1;
				}

			}

			&-main {
				padding: 20upx;
				display: flex;
				flex-wrap: wrap;

				.button {
					width: 150upx;
					margin: 0 10upx;
					text-align: center;
					padding: 10upx 0;
					font-size: 30upx;
					border-radius: 40upx;
					color: #666;
					background: #f4f4f4;
				}

				.active {
					color: #fff;
					box-shadow: 0 2px 6px rgba(228, 63, 66, 0.2);
					background: linear-gradient(to left, #fa6567 0, #fa8587 100%);
				}

				.button1 {
					color: #333;
					width: 30%;
					height: 50upx;
					line-height: 50upx;
					background: #f4f4f4;
					padding: 10upx 0;
					margin: 10upx 10upx;
					text-align: center;
					font-size: 30upx;
					font-weight: bold;
					border-radius: 10upx;
					overflow: Hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
