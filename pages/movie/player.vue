<template>
	<view class="detail">
		<view class="detail-head ">
			<video id="myVideo" class="video" :initial-time="playerInitialTime" :autoplay="true" :src="palyerUrl" @timeupdate="videoTimeupdate"
			 @play="videoPlay" @error="videoError" @pause="videoPause"></video>
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
				<view :class="['button1',item.active?'active':'']" v-for="(item,index) in urlList.urlList" :key='index' @click="getPlayerUrl(urlList.addres,item)">{{item.title}}</view>
			</view>
		</div>
	</view>
</template>

<script>
	import mixins from '@/mixins/index.js'
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	export default {
		mixins: [mixins],
		components: {
			uniNoticeBar
		},

		data() {
			return {
				vodInfo: {},
				vodList: [],
				palyerUrl: 'https://cn1.download05.com/hls/20190910/dc7992f5d9b95d26ef8d2726acd71675/1568085844/index.m3u8',
				urlList: [],
				history: false,
				historyJIndu: {
					currentTime: 0,
					duration: 0
				},
				historyData: [],
				playerInitialTime: 0
			}
		},
		onLoad: function(option) {
			this.videoContext = uni.createVideoContext('myVideo')
			this.getVodInfo(option.id)
			if (option.history) {
				console.log('历史数据:', option);
				this.history = true;
				this.historyData = JSON.parse(decodeURIComponent(option.history))
			} else {
				this.history = false
			}
		},
		methods: {

			//初始化获取历史记录
			setHistoryData() {
				const historyData = this.historyData;
				console.log('播放地址：', historyData);
				this.vodList = this.vodList.map(item => {
					item.active = false;
					if (historyData.activeAddress == item.addres) item.active = true;
					return item
				})
				this.urlList = this.vodList.filter(item => item.active)[0] || {}
				this.urlList.urlList = this.urlList.urlList.map(item => {
					item.active = false;
					if (historyData.activeTitle == item.title) item.active = true;
					return item
				})
				this.palyerUrl = this.historyData.activeUrl;

				// this.videoContext.seek(historyData.currentTime||0)
				this.playerInitialTime = historyData.currentTime || 0
				this.videoContext.play()

			},
			//启动播放
			videoPlay() {
				this.endPlayer();
			},
			//启动错误
			videoError(e) {
				console.log('Error:', e);
			},
			//启动暂停
			videoPause(e) {
				console.log('Pause:', e);
			},
			//播放时间进度
			videoTimeupdate(event) {
				this.historyJIndu = event.detail
				this.buildData(this.historyJIndu)
			},
			showMenu(data) {
				const reg = /m3u8/
				return reg.test(data.addres)
			},
			//点击播放
			async getPlayerUrl(add, data) {
				const obj = {
					type: add,
					url: data.url
				}
				const url = await this.getRealPalyeUrl(obj)
				console.log(11, url);
				this.palyerUrl = url;
				this.endPlayer()
			},
			//播放同步按钮和历史记录
			endPlayer() {
				this.buildData();
				this.videoContext.play()
			},
			buildData(params) {
				let data = {};
				this.urlList.urlList = this.urlList.urlList.map(item => {
					item.active = false;
					if (this.palyerUrl == item.url) {
						item.active = true;
						data = item
					}
					return item
				})
				const {
					vod_id,
					vod_pic,
					vod_name,
					vod_director,
					vod_actor,
					vod_year,
					vod_score
				} = this.vodInfo
				let obj2 = {
					activeAddress: this.urlList.addres,
					activeTitle: data.title,
					activeUrl: data.url,
					vod_id,
					vod_pic,
					vod_name,
					vod_director,
					vod_actor,
					vod_year,
					vod_score,
					currentTime: 0,
					duration: 0

				}
				if (params) {
					obj2.currentTime = params.currentTime;
					obj2.duration = params.duration;
				}
				this.setSync(obj2);
			},
			//同步历史记录
			setSync(data) {
				let playerHistory = uni.getStorageSync('player:history');
				if (!playerHistory) playerHistory = [];
				for (var i = 0; i < playerHistory.length; i++) {
					if (playerHistory[i].vod_id === data.vod_id) {
						playerHistory.splice(i, 1);
						break;
					}
				}
				playerHistory.unshift(data);
				uni.setStorage({
					key: 'player:history',
					data: playerHistory,
					success: function() {
						console.log('player 缓存成功');
					}
				});
			},
			//获取基本信息
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
					this.urlList = this.vodList.filter(item => item.active)[0] || {}
					console.log('urlList', this.urlList);
					this.palyerUrl = this.urlList.urlList[0].url;
					if (this.history) this.setHistoryData()
				} else {
					console.log("请求错误");
				}
			},
			//设置选中状态
			setActive(data) {
				this.vodList = this.vodList.map(item => {
					item.active = false;
					if (data.addres == item.addres) item.active = true
					return item
				})
				this.urlList = this.vodList.filter(item => item.active)[0] || {}
			},
			toPlayer() {
				uni.navigateTo({
					url: '/pages/movie/player'
				});
			},

		}
	}
</script>

<style lang="scss">
	.detail {
		background: #f5f5f5;

		&-head {
			// padding: 20rpx;
			position: relative;
			width: 100%;
			height: 400upx;
			background: #ffff;

			.video {
				width: 100%;
				height: 100%;

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
					color: #fff !important;
					box-shadow: 0 2px 6px rgba(228, 63, 66, 0.2) !important;
					background: linear-gradient(to left, #fa6567 0, #fa8587 100%) !important;
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
