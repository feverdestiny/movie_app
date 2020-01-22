export default {
	methods: {

		/**
		 * @description  设置背景颜色
		 * @param {Object} data 数据源
		 */
		setStyleImg(data) {
			let img = data.vod_pic;
			if (img.indexOf('http') != -1) {} else {
				img = this.$config.serveIp + '/' + data.vod_pic
			}
			return {
				backgroundImage: `url(${img})`
			}
		},


		/**
		 * @description  设置图片
		 * @param {Object} data 数据源
		 */
		setImg(data) {
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


		/**
		 *@description  节点点击事件（电影、电视剧、动漫）
		 * @param {Object} data 数据源
		 */
		setClick(data) {
			uni.navigateTo({
				url: `/pages/movie/player?id=${data.vod_id}`
			});
		},
		setClickPlayer(data) {
			uni.navigateTo({
				url: `/pages/movie/player?id=${data.vod_id}`
			});
		},
		/**
		 * @description  解析url数据格式
		 * @param {Object} data 设置数据源
		 */
		setVodList(data) {
			const palyForm = data.vod_play_from.split('$$$');
			const playUrl = data.vod_play_url.split('$$$');
			let palyList = [];
			palyForm.forEach((item, index) => {
				let obj = {
					addres: item,
					urlList: [],
					active: index == 0 ? true : false
				}
				const list2 = playUrl[index].split('#')

				list2.forEach(item2 => {
					let obj2 = {
						title: item2.split('$')[0],
						url: item2.split('$')[1]
					}
					obj.urlList.push(obj2)
				})

				palyList.push(obj)
			})
			palyList = palyList.filter(item => {
				const reg = /m3u8/
				return reg.test(item.addres)
			})
			console.log(palyList);
			return palyList
		},

		/**
		 * 获取真实播放地址
		 * @param {Object} data
		 */
		async getRealPalyeUrl(data) {
			const reg = /m3u8/
			if (reg.test(data.type)) {
				return data.url
			} else {
				switch (data.type) {
					case "yjyun":
						return await this.getYY(data.url)
						break;
					default:
						uni.showToast({
							title: '暂不支持解析，请联系管理员',
							duration: 2000
						});
						return ''
						break;
				}
			}

		},
		async getYY(url) {
			const param = {
				url: url
			}
			uni.showLoading({
				title: '解析中'
			});
			const res = await this.$http.post('movie/dyController/getRealUrl', param)
			if (res.data && res.data.success) {
				uni.hideLoading();
				return res.data.result.url
			} else {
				console.log("请求错误");
				uni.hideLoading();
				uni.showToast({
					title: '解析失败，请重试',
					duration: 2000
				});
			}
		},

		conver(limit) {
			var size = "";
			if (limit < 0.1 * 1024) { //如果小于0.1KB转化成B  
				size = limit.toFixed(2) + "B";
			} else if (limit < 0.1 * 1024 * 1024) { //如果小于0.1MB转化成KB  
				size = (limit / 1024).toFixed(2) + "KB";
			} else if (limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB  
				size = (limit / (1024 * 1024)).toFixed(2) + "MB";
			} else { //其他转化成GB  
				size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
			}

			var sizestr = size + "";
			var len = sizestr.indexOf("\.");
			var dec = sizestr.substr(len + 1, 2);
			if (dec == "00") { //当小数点后为00时 去掉小数部分  
				return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
			}
			return sizestr;
		}
	}
}
