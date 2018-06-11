<template>
	<div class="bread">
		<span v-for="(item, index) in bareadData" :key="item.path+index" :class="{active:index === lastIdx}">
			<span class="spanitem" @click="navClick(item,index)">{{item.text}}</span>
			<i v-if="index !== lastIdx" class="iconfont icon-arrow-right-copy-copy-copy"></i>
		</span>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				baseBreadData: [
					{
						text: '联系我们',
						path: '/pages/Contact'
					},
					{
						text: '首页',
						path: '/pages/Home'
					}
				]
			}
		},
		props: {
			activePatch: {
				type: String
			}
		},
		computed: {
			bareadData () {
				let arr = [
					{
						text: '首页',
						path: '/pages/Home'
					}
				]
				let findarr = this.baseBreadData.find((v) => {
					return v.path === this.activePatch
				})
				if (findarr) {
					arr.push(findarr)
				}
				return arr
			},
			lastIdx () {
				return this.bareadData.length - 1
			}
		},
		methods: {
			navClick (t, i) {
				if (i !== this.lastIdx) {
					this.$router.push({path: t.path})
				}
			}
		}
	}
</script>
<style lang="less">
	.bread{
		line-height: 24px;
		background: #EFEFF4;
		font-size: 14px;
		color:#999;
		.spanitem{
			display: inline-block;
			padding:0 4px;
		}
		.active{
			color:#55A1F9;
		}
		label, view{
			display: inline-block;
		}
	}
</style>
