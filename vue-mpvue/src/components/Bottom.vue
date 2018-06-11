<template>
	<div class="bottom">
		<div v-for="(item, index) in bottomData" :key="item.path+index" @click="click(item)" class="bottomDiv" :class="{active: index === activIndex}">
			<i :class="item.class"></i>
			<p>{{item.text}}</p>
		</div>
		<!-- <transition name="slide-fade"> -->
			<div :animation="animationData" class="consult" v-if="openPhoneType">
				<div class="consultTop">
					<h4>在线预约</h4>
					<i class="iconfont icon-daohangguanbi" @click="closeconsult"></i>
				</div>
				<div class="consultbox">
					<div v-for="(o, idx) in consultData" :key="o.boxId+idx" class="">
						<i :id="o.boxId"></i>
						<svg class="icon" aria-hidden="true">
							<use :xlink:href="'#'+o.boxId"></use>
						</svg>
						<div v-for="(t, i) in o.data" :key="t.content+i+idx">
							<a :href="t.tel ? 'tel:'+t.content : ''">{{t.content}}<i :class="t.class" :id="t.id"></i></a>
						</div>
					</div>
				</div>
			</div>
		<!-- </transition> -->
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				bottomData: [
					{
						class: 'iconfont icon-wenzhang',
						text: '单位主页',
						id: '',
						path: '/pages/Home',
						a: true,
					},
					{
						class: 'iconfont icon-gongjuxiang',
						text: '招聘信息',
						id: '',
						path: '/components/Openwindow',
						a: 'https://3g.kq36.com/jobs/2004088'
					},
					{
						class: 'iconfont icon-liaotian1',
						text: '在线预约',
						id: 'openPhone',
						a: false
					},
					{
						class: 'iconfont icon-msnui-caller',
						text: '联系我们',
						id: '',
						path: '/pages/Contact',
						a: true
					}
				],
				openPhoneType: false,
				consultData: [
					{
						boxId: 'icon-dianhua1',
						data: [
							{
								class: '',
								tel: true,
								content: '07743788120'
							},
							{
								class: '',
								tel: true,
								content: '13870406778'
							}
						]
					},
					{
						boxId: 'icon-weixin',
						data: [
							{
								class: '',
								tel: false,
								content: '13878006778'
							}
						]
					}
				],
				animationData: {}
			}
		},
		computed: {
			activIndex () {
				let that = this
				let idx = this.bottomData.findIndex(function (v) { return v.path === that.$route.path })
				return idx !== -1 ? idx : 0
			}
		},
		destoryed () {
			this.openPhoneType = false
		},
		methods: {
			click (t) {
				if (this.openPhoneType) {this.util('close')}
				if (t.a && t.path!== this.$route.path) {
					let pushdata = typeof t.a === 'string' ? {path: t.path, query: {a: t.a}} : {path: t.path}
					this.$router.push(pushdata)
				} else {
					if (t.id === 'openPhone') {
						// this.openPhoneType = !this.openPhoneType
						this.util(this.openPhoneType ? 'close' : 'open' )
					}
				}
			},
			closeconsult () {
				this.openPhoneType = false
			},
			util(status){
				/* 动画部分 */
				// 第1步：创建动画实例
				var animation = wx.createAnimation({
					duration: 250, //动画时长
					timingFunction: "linear", //线性
					delay: 0 //0则不延迟
				});

				// 第2步：这个动画实例赋给当前的动画实例
				this.animation = animation;

				// 第3步：执行第一组动画：Y轴偏移190px后(盒子高度是190px)，停
				animation.translateY(190).step();

				// 第4步：导出动画对象赋给数据对象储存 
				this.animationData = animation.export()

				// 第5步：设置定时器到指定时候后，执行第二组动画
				setTimeout(() => {
					// 执行第二组动画：Y轴不偏移，停
					animation.translateY(0).step()
					// 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
					this.animationData = animation
					//关闭抽屉 
					if (status === "close") {
						this.openPhoneType = false
					}
				}, 250)

				// 显示抽屉 
				if (status === "open") {
					this.openPhoneType = true
				}
			}
		}
	}
</script>
<style lang="less">
	.icon {
		width: 1em; height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		font-size: 30px;
		line-height:49px;
		margin-top: 10px;
	}
	.bottom{
		display: flex;
		justify-content:space-between;
		background: #fafafa;
		height:50px;
		z-index: 1000;
		.bottomDiv{
			flex:1;
			display: flex;
			flex-direction:column;
			color:#a4aab3;
			align-items:center;
			border-right:1px solid rgba(164, 164, 164, 0.18);
			padding-top:3px;
			i{
				font-size: 24px;
				line-height: 30px;
			}
			.icon-gongjuxiang{
				font-size: 33px;
			}
			.icon-msnui-caller , .icon-liaotian1{
				font-size: 32px;
			}
			&i:last-child{
				font-size: 32px;
			}
			p{
				font-size: 12px;
			}
			&.active{
				color:#55a1f9;
			}
		}
		.consult{
			position: absolute;
			z-index: 10;
			width:96%;
			margin:0 2%;
			bottom:50px;
			left:0;
			font-size:16px;
			background:#fff;
			border-top-left-radius:10px;
			border-top-right-radius:10px;
			box-shadow: 0px -3px 16px -2px;
			.consultTop{
				width:100%;
				display: flex;
				justify-content:space-between;
				line-height:39px;
				background:#fff;
				padding:0 14px;
				border-top:1px solid rgba(164, 164, 164, 0.18);
				border-bottom:1px solid rgba(164, 164, 164, 0.18);
				border-top-left-radius:10px;
				border-top-right-radius:10px;
				.icon-daohangguanbi{
					font-size: 24px;
					margin-top:-2px;
					color: #969494;
				}
			}
			.consultbox{
				padding-left:10px;
				>div{
					height:50px;
					margin-left:8px;
					padding-right:10px;
					border-bottom: 1px solid #ddd;
					display: flex;
					line-height:48px;
					div{
						padding-left:6px;
						line-height:24px;
						align-items:center;
						justify-content:center;
						display:flex;
					}
					a{
						padding:6px 12px;
						background:#e2f3fb;
						margin-right:6px;
						border-radius: 16px;
						line-height:24px;
						text-decoration: underline;
					}
					&:last-child{
						border:0;
					}
				}
			}
		}
	}
.slide-fade-enter-active,.slide-fade-leave-active{
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(140px);
  opacity: 0;
}
</style>
