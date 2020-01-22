<template>
	<view>
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face">
					<image :src="userinfo.face"></image>
				</view>
				<view class="info">
					<view class="username">{{userinfo.username}}</view>
					<view class="integral">积分:{{userinfo.integral}}</view>
				</view>
			</view>
			<view class="setting">
				<image src="../../static/HM-PersonalCenter/setting.png"></image>
			</view>
		</view>
		<view class="orders" v-show="false">
			<view class="box">
				<view class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover" @tap="toOrderType(index)">
					<view class="icon">
						<view class="badge" v-if="row.badge>0">{{row.badge}}</view>
						<image :src="'../../static/HM-PersonalCenter/'+row.icon"></image>
					</view>
					{{row.name}}
				</view>
			</view>
		</view>
		<view class="list" v-for="(list,list_i) in severList" :key="list_i">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(li)" v-bind:class="{'noborder':li_i==list.length-1}"
			 hover-class="hover" :key="li.name">
				<view class="icon">
					<BaseIcon fontsize="40upx" :icon="li.icon" />
				</view>
				<view class="text">{{li.name}}</view>
				<view class="text2" v-if="li.name==='清除缓存'">{{currentSize}}</view>
				<BaseIcon fontsize="35upx" icon="next" />
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
				//#ifdef APP-PLUS
				isH5Plus: true,
				//#endif
				//#ifndef APP-PLUS
				isH5Plus: false,
				//#endif
				userinfo: {},
				orderTypeLise: [
					//name-标题 icon-图标 badge-角标
					{
						name: '待付款',
						icon: 'l1.png',
						badge: 1
					},
					{
						name: '待发货',
						icon: 'l2.png',
						badge: 2
					},
					{
						name: '待收货',
						icon: 'l3.png',
						badge: 6
					},
					{
						name: '待评价',
						icon: 'l4.png',
						badge: 9
					},
					{
						name: '退换货',
						icon: 'l5.png',
						badge: 0
					}
				],
				severList: [
					[{
							name: '历史记录',
							icon: 'zhuanjiguangpan'
						},
						{
							name: '清除缓存',
							icon: 'shiyanhuaxue'
						},
					],
					[{
							name: '说明',
							icon: 'xuegao'
						},
						{
							name: '分享',
							icon: 'fenxiang'
						},
						{
							name: '版本检测',
							icon: 'lianjie'
						},
					]
				],
				currentSize: 0
			};
		},
		onLoad() {
			//加载
			this.init();

		},
		onShow() {
			this.getStoreInfo();
		},
		methods: {
			getStoreInfo() {
				const self = this;
				uni.getStorageInfo({
					success: function(res) {
						console.log(res.keys);
						console.log(self.conver(res.currentSize));
						self.currentSize = self.conver(res.currentSize)
						console.log(res.limitSize);
					}
				});
			},
			init() {
				//用户信息
				this.userinfo = {
					face: '/static/item.jpg',
					username: "个人中心",
					integral: "9999"
				}

			},
			//用户点击订单类型
			toOrderType(index) {
				uni.showToast({
					title: this.orderTypeLise[index].name
				});
			},
			//用户点击列表项
			toPage(li) {
				switch (li.name) {
					case '清除缓存':
						uni.showModal({
							title: '提示',
							content: '是否清理缓存？',
							success: res => {
								if (res.confirm) {
									uni.clearStorageSync();
									this.getStoreInfo();
								}
							}
						});
						break;
					case '历史记录':
						uni.navigateTo({
							url: '/pages/history/history'
						});
					default:
						break;
				}
				// uni.showToast({
				// 	title: li.name
				// });
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff
	}

	.header {
		&.status {
			padding-top: var(--status-bar-height);
		}

		background-color:#ff6364;
		width:92%;
		height:40vw;
		padding:0 4%;
		display:flex;
		align-items:center;

		.userinfo {
			width: 90%;
			display: flex;
			padding-left: 100upx;

			.face {
				flex-shrink: 0;
				width: 15vw;
				height: 15vw;

				image {
					width: 100%;
					height: 100%;
					border-radius: 100%
				}
			}

			.info {
				display: flex;
				flex-flow: wrap;
				padding-left: 30upx;

				.username {
					width: 100%;
					color: #fff;
					font-size: 40upx
				}

				.integral {
					display: flex;
					align-items: center;
					padding: 0 20upx;
					height: 40upx;
					color: #fff;
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 20upx;
					font-size: 24upx
				}
			}
		}

		.setting {
			flex-shrink: 0;
			width: 6vw;
			height: 6vw;

			image {
				width: 100%;
				height: 100%
			}
		}
	}

	.hover {
		background-color: #eee
	}

	.orders {
		background-color: #ff6364;
		width: 92%;
		height: 11vw;
		padding: 0 4%;
		margin-bottom: calc(11vw + 40upx);
		display: flex;
		align-items: flex-start;
		border-radius: 0 0 100% 100%;
		margin-top: -1upx;

		.box {
			width: 98%;
			padding: 0 1%;
			height: 22vw;
			background-color: #fefefe;
			border-radius: 24upx;
			box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
			margin-bottom: 40upx;
			display: flex;
			align-items: center;
			justify-content: center;

			.label {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-flow: wrap;
				width: 100%;
				height: 16vw;
				color: #666666;
				font-size: 26upx;

				.icon {
					position: relative;
					width: 7vw;
					height: 7vw;
					margin: 0 1vw;

					.badge {
						position: absolute;
						width: 4vw;
						height: 4vw;
						background-color: #ec6d2c;
						top: -1vw;
						right: -1vw;
						border-radius: 100%;
						font-size: 20upx;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 10;
					}

					image {
						width: 7vw;
						height: 7vw;
						z-index: 9;
					}
				}
			}
		}
	}

	.list {
		width: 100%;
		border-bottom: solid 26upx #f1f1f1;

		.li {
			width: 92%;
			height: 100upx;
			padding: 0 4%;
			border-bottom: solid 1upx #e7e7e7;
			display: flex;
			align-items: center;

			&.noborder {
				border-bottom: 0
			}

			.icon {
				flex-shrink: 0;
				width: 50upx;
				height: 50upx;

				image {
					width: 50upx;
					height: 50upx
				}
			}

			.text {
				padding-left: 20upx;
				width: 100%;
				color: #666
			}

			.text2 {
				font-size: 30upx;
				padding-right: 20upx;
				color: #666
			}

			.to {
				flex-shrink: 0;
				width: 40upx;
				height: 40upx
			}
		}
	}
</style>
