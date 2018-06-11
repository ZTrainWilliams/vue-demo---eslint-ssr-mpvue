<template>
	<div class="header">
		<i v-if="backType" class="header_l iconfont icon-jiantou" @click="goback"></i>
		<router-link to="/">WZ</router-link>
		<i class="header_r iconfont icon-daohang" :class="{daohangSlate:navType}" @click="openSilder"></i>
			<transition name="fade">
		<div class="nav" v-if="navType" click.prevent="openSilder">
				<div class="navr">
					<div v-for="(item, index) in Navigation" @click="navClick(item)" :key="index">
						<i :class="item.class"></i>
						<span>{{item.text}}</span>
					</div>
				</div>
		</div>
			</transition>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				navType: false
			}
		},
		props: {
			backType1: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			backType () {
				return this.$route.name !== 'Home'
			},
			Navigation () {
				let arr = [
					{
						class: 'iconfont icon-shouye2',
						text: '首页',
						a: true,
						path: '/'
					},
					{
						class: 'iconfont icon-icon01',
						text: '联系我们',
						a: true,
						path: 'Contant'
					},
					{
						class: 'iconfont icon-fenxiang',
						text: '分享首页',
						a: false,
						path: ''
					},
					{
						class: 'iconfont icon-chakan',
						text: '浏览0次',
						a: false,
						path: ''
					}
				]
				arr[3].text = this.$store.state.home.webhit
				return arr
			}
		},
		methods: {
			openSilder () {
				this.navType = !this.navType
			},
			goback () { this.$router.go(-1) },
			navClick (t) {
				if (t.a) {
					this.$router.push({path: t.path})
				} else {}
			}
		}
	}
</script>
<style lang="less">
	.header{
		line-height: 50px;
		width:100%;
		background: #fafafa;
		display: flex;
		padding:0 10px;
		text-align:center;
		font-size: 18px;
		border-bottom:1px solid rgba(164, 164, 164, 0.18);
		a{
			flex-grow:1;
		}
		.header_l{
			position: absolute;
			left:10px;
			top:0;
		}
		.header_r{
			position: absolute;
			right:10px;
			top:0;
			transition:all 0.5s;
		}
		.icon-daohang{
			font-size: 30px;
			color: #969494;
		}
		.daohangSlate{
			transform:rotate(-90deg);
		}
		.icon-daohangguanbi{
			font-size: 34px;
		}
		.nav{
			position: absolute;
			z-index: 1000;
			right:0;
			top:50px;
			width:100%;
			height:calc(100% - 16px);
			.navr{
				width:45%;
				position:absolute;
				right:0;
				top:0;
				div{
					&:last-child{
						border:0;
						i{font-size: 16px;}
					}
					background:#fff;
					padding-left:15%;
					height:50px;
					line-height:50px;
					border-bottom: 1px solid #D8D8D8 ;
					display: flex;
					i{
						font-size: 24px;
					}
					span{
						font-size: 14px;
						padding-left:10px;
					}
				}
			}
		}
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
