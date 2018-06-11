<template>
	<div class="home">
		<Header/>
		<div class="main">
			<div class="banner">
				<img src="../assets/img/banner1.png">
			</div>
			<div class="mainBox">
				<div class="imgbox" v-for="(item, index) in homeData" :key="index" @click="mainClick(item)">
					<img :src="item.src">
					<div>{{item.text}}</div>
				</div>
			</div>
		</div>
		<Bottom/>
	</div>
</template>
<script>
	import Header from '@/components/Header.vue'
	import Bottom from '@/components/bottom.vue'
	export default {
		data () {
			return {
				swiperList: [{
						url: 'javascript:',
						img: '../assets/img/banner1.png',
						title: '送你一朵fua'
					}, {
						url: 'javascript:',
						img: '../assets/img/banner1.png',
						title: '送你一次旅行'
				}],
				homeData: [
					{
						src: require('../assets/img/home_btn_case.jpg'),
						text: '单位简介',
						a: true,
						path: ''
					},
					{
						src: require('../assets/img/home_btn_Company.jpg'),
						text: '照片/视频',
						a: true,
						path: ''
					},
					{
						src: require('../assets/img/home_btn_doctor.jpg'),
						text: '医生简介',
						a: true,
						path: ''
					},
					{
						src: require('../assets/img/home_btn_Healthcare.jpg'),
						text: '保健常识',
						a: true,
						path: ''
					},
					{
						src: require('../assets/img/home_btn_image.jpg'),
						text: '病例展示',
						a: true,
						path: ''
					},
					{
						src: require('../assets/img/home_btn_project.jpg'),
						text: '诊疗项目',
						a: true,
						path: ''
					}
				]
			}
		},
		components: {Header, Bottom},
		mounted () {
			console.log('this is my home.vue')
		},
		methods: {
			mainClick (item) {}
		}
	}
</script>
<style lang="less">
	.home{
		.main{
			flex:1;
			overflow-y: auto;
			.banner{
				img{
					width:100%;
					height:auto;
					display: block;
				}
			}
			.mainBox{
				.imgbox{
					position: relative;
					display: inline-block;
					width:45%;
    			margin: 2.5%;
    			margin-bottom:0;
					img{
						width:100%;
						vertical-align: middle;
					}
					div{
						position:absolute;
						left:0;
						color:#fff;
						display: flex;
						justify-content:center;
						align-items:center;
						top:0;
						width:100%;
						height:80%;
						font-size: 15px;
					}
				}
			}
		}
	}
</style>
