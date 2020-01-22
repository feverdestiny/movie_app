<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 轮播 -->
		<view>
			<swiper class="bande">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image class="bande" mode="aspectFill" lazy-load :src="item.vod_pic"></image>

					<!-- <image class="bande" mode="aspectFill" lazy-load src="https://img.yongjiu7.com/upload/vod/2019-07-04/15621988803.jpg"></image> -->

				</swiper-item>
			</swiper>
		</view>
		<!-- 热播推荐 -->
		<view class="list-rm">
			<view class="title-head">
				<view class="item1">
					<image class="img" src="/static/sysicon/fanjutuijian.png"></image>
				</view>
				<view class="item2">热播推荐</view>
				<view class="item3">
					<BaseIcon fontsize="30upx" icon="dingweidizhigpsditu" /> <text>排行榜</text>
					<BaseIcon fontsize="25upx" icon="next" />
				</view>
			</view>
		</view>

		<!-- 热播电影 -->
		<view class="list-rm">
			<view class="title-head">
				<view class="item1">
					<image class="img" src="/static/sysicon/zhibo.png"></image>
				</view>
				<view class="item2">热播电影</view>
				<view class="item3">
					<BaseIcon fontsize="30upx" icon="dingweidizhigpsditu" />
					<text>查看更多</text>
					<BaseIcon fontsize="25upx" icon="next" />
				</view>
			</view>

			<view class="title-content">
				<view class="content-item" v-for="(item,index) in dyList" :key="index">
					<!-- <view class="main" :style="{backgroundImage:'url(https://ty.download05.com/1562823805674001.jpeg)'}" @click="setClick(item)"> -->
					<view class="main" :style="{backgroundImage:'url('+item.vod_pic+')'}" @click="setClick(item)">
						<view class="tips red">{{item.vod_douban_score}}</view>
						<view class="duration">{{item.vod_remarks}}</view>
					</view>
					<view class="name">{{item.vod_name}}</view>
				</view>
			</view>
		</view>
		<!-- 热播电视剧 -->
		<view class="list-rm">
			<view class="title-head">
				<view class="item1">
					<image class="img" src="/static/sysicon/dianshiju.png"></image>
				</view>
				<view class="item2">热播电视剧</view>
				<view class="item3">
					<BaseIcon fontsize="30upx" icon="dingweidizhigpsditu" />
					<text>查看更多</text>
					<BaseIcon fontsize="25upx" icon="next" />
				</view>
			</view>

			<view class="title-content">
				<view class="content-item" v-for="(item,index) in dsjList" :key="index">
					<view class="main" :style="{backgroundImage:'url('+item.vod_pic+')'}" @click="setClick(item)">
						<view class="tips red">{{item.vod_douban_score}}</view>
						<view class="duration">{{item.vod_remarks}}</view>
					</view>
					<view class="name">{{item.vod_name}}</view>
				</view>
			</view>
		</view>
		<view class="list-rm">
			<view class="title-head">
				<view class="item1">

					<image class="img" src="/static/sysicon/guochandonghuatuijian.png"></image>

				</view>
				<view class="item2">热播动漫</view>
				<view class="item3">
					<BaseIcon fontsize="30upx" icon="dingweidizhigpsditu" />
					<text>查看更多</text>
					<BaseIcon fontsize="25upx" icon="next" />
				</view>
			</view>

			<view class="title-content">
				<view class="content-item" v-for="(item,index) in dmList" :key="index">
					<view class="main" :style="{backgroundImage:'url('+item.vod_pic+')'}" @click="setClick(item)">
						<view class="tips red">{{item.vod_douban_score}}</view>
						<view class="duration">{{item.vod_remarks}}</view>
					</view>
					<view class="name">{{item.vod_name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseIcon from '@/components/base-icon/index.vue';
	import mixins from '@/mixins/index.js'
	export default {
		mixins: [mixins],
		components: {
			BaseIcon
		},
		data() {
			return {
				bannerList: [],
				dyList: [],
				dsjList: [],
				dmList: [],
				ttest: 'https://img.yongjiu7.com/upload/vod/2019-07-04/15621988803.jpg'
			}
		},
		onLoad() {
			this.getBanner()
			this.getDy()
			this.getDsj()
			this.getDm()
		},
		onNavigationBarSearchInputClicked(e) {
			console.log('事件执行了')
			uni.navigateTo({
				url: '/pages/search/index'
			});
		},
		methods: {
			test(){
				return 'https://ty.download05.com/1562823805674001.jpeg'
			},
			setImg(data) {
				// return 'https://ty.download05.com/1562823805674001.jpeg'
				let img = data.vod_pic;
				if (img) {
					if (img.indexOf('http') != -1) {} else {
						img = this.$config.serveIp + '/' + data.vod_pic
					}
					console.log(img);
					return img
				} else {
					'/static/item.jpg'
				}


			},
			setBanner(data) {
				// return 'https://img.yongjiu7.com/upload/vod/2019-07-04/15621988803.jpg'
				if (data.vod_pic_slide && data.vod_pic_slide != '') {
					return this.$config.serveIp + '/' + data.vod_pic_slide
				} else {
					return data.vod_pic
				}
			},
			async getBanner() {
				const res = await this.$http.get('movie/dyController/getBanner')
				if (res.data && res.data.success) {
					this.bannerList = res.data.result.map(item => {
						if (item.vod_pic_slide && item.vod_pic_slide != '') {
							item.imgurl = this.$config.serveIp + '/' + item.vod_pic_slide
						} else {
							item.imgurl = item.vod_pic
						}
						return item
					})
				} else {
					console.log("请求错误");
				}
			},
			async getDy() {
				const res = await this.$http.get('movie/dyController/getHotDY')
				console.log(res);
				if (res.data && res.data.success) {
					this.dyList = res.data.result
				} else {
					console.log("请求错误");
				}
			},
			async getDsj() {
				const res = await this.$http.get('movie/dyController/getHotDSJ')
				console.log(res);
				if (res.data && res.data.success) {
					this.dsjList = res.data.result
				} else {
					console.log("请求错误");
				}
			},
			async getDm() {
				const res = await this.$http.get('movie/dyController/getHotDM')
				console.log(res);
				if (res.data && res.data.success) {
					this.dmList = res.data.result
				} else {
					console.log("请求错误");
				}
			},
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	$fontSize:34upx;
	$padding:20upx;

	.bande {
		height: 400upx;
		width: 100%;

	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.content {
		font-size: 16px;
		color: #333;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.list-rm {
		margin-top: 20upx;

		.title-head {
			display: flex;

			.item1 {
				padding-left: $padding;
				width: 60upx;

				.img {
					width: 100%;
					height: 100%
				}
			}

			.item2 {
				font-size: $fontSize;
				height: 60upx;
				line-height: 60upx;
				flex: 1
			}

			.item3 {
				width: 200upx;
				font-size: 25upx;
				color: #ffb90f;
				height: 60upx;
				line-height: 60upx;
				text-align: right;
				padding-right: 10upx;
			}
		}

		.title-content {
			margin-top: 20upx;
			// padding: 0 $padding;
			display: flex;
			flex-wrap: wrap;


			.content-item {
				margin: 0 10upx;
				margin-bottom: 20upx;
				width: calc(33.3% - 20upx);

				.main {
					border-radius: 6px;
					box-shadow: 6px 6px 20px #999;
					position: relative;
					height: 300upx;
					width: 100%;
					background-size: 100% 100%;

					.tips {
						padding: 5upx 10upx;
						display: block;
						position: absolute;
						overflow: hidden;
						font-size: 25upx;
						top: 0;
						left: 0;
						overflow: hidden;
						color: #fff;
						text-align: center;
					}

					.red {
						border-radius: 6px 0 6px 0;
						background: #fa474b;
						background: linear-gradient(to left, #fa6567 0, #fa8587 100%);
						box-shadow: 0 2px 6px rgba(228, 63, 66, 0.2);
					}

					.duration {
						// width: 100%;
						border-radius: 6px 0 6px 0;
						position: absolute;
						bottom: 0;
						right: 0;
						height: 40upx;
						line-height: 40upx;
						padding: 0 10upx;
						font-size: 25upx;
						color: #fff;
						background: rgba(0, 0, 0, .6);
						overflow: hidden;
					}
				}

				.name {
					margin-top: 20upx;
					text-align: center;

				}
			}

		}
	}
</style>
