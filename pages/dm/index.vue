<template>
	<view>
		<view class="list-rm">
			<view class="title-head">
				<!-- 	<view class="item1">
					<image class="img" src="/static/sysicon/zhibo.png"></image>
				</view>
				<view class="item2">热播电影</view>
				<view class="item3">
					<BaseIcon fontsize="30upx" icon="dingweidizhigpsditu" />
					<text>查看更多</text>
					<BaseIcon fontsize="25upx" icon="next" />
				</view> -->
			</view>

			<view class="title-content">

			<view class="content-item" v-for="(item,index) in movieData" :key="index">
				<view class="main" :style="{backgroundImage:'url('+item.vod_pic+')'}" @click="setClick(item)">
					<view class="tips red">{{item.vod_douban_score}}</view>
					<view class="duration">{{item.vod_remarks}}</view>
				</view>
				<view class="name">{{item.vod_name}}</view>
			</view>
			</view>
			<view class="loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>


<script>
	import BaseIcon from '@/components/base-icon/index.vue';
	import mixins from '@/mixins/index.js'
	export default {
		mixins:[mixins],
		onPullDownRefresh() {
			console.log('refresh');
			this.restartData();
			this.initData();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},

		components: {
			BaseIcon
		},
		onLoad() {
			console.log('onLoad');
			this.initData()
		},
		onUnload() {
		this.restartData()
		},
		onReachBottom() {
			console.log('onReachBottom');
			this.initData();
		},
		data() {
			return {
				page:1,
				pageSize:30,
				movieData:[],
				loadMoreText: "加载中...",
				showLoadMore: false,
			}
		},
		methods: {
			async restartData(){
				this.page = 1;
				this.pageSize=30;
				this.movieData = [];
				this.loadMoreText = "加载更多";
				this.showLoadMore = false;
			},
			async initData(){
					this.showLoadMore =true;
					this.loadMoreText = "加载中...";
				const res = await this.$http.post('movie/dyController/getDMList', {
					page:this.page,
					pageSize:this.pageSize
				})
				if (res.data && res.data.success) {
					const data=res.data.result;
					this.movieData=this.movieData.concat(data.rows) ;
					this.page=Number(data.page) +1;
					this.loadMoreText = "加载更多";
					this.showLoadMore = true;
				} else {
					console.log("请求错误");
				}
			},
			viewDetail() {
				uni.navigateTo({
					url: '/pages/movie/detail'
				});
			}
		}
	}
</script>

<style lang="scss">
	$fontSize:34upx;
	$padding:20upx;

	.list-rm {
		font-size: 28upx;
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
	
	.loadmore{
		text-align: center;
	}
	}
	
</style>
