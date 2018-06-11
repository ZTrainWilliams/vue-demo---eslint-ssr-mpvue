<template>
	<div>
		<Header/>
		<div id="main">
			<Breadcrumb :activePatch="activePatch"/>
			about me!
		</div>
		<Bottom/>
	</div>
</template>
<script type="text/javascript">
	import Header from '@/components/Header.vue'
	import Bottom from '@/components/bottom.vue'
	import Breadcrumb from '@/components/Breadcrumb.vue'
	export default {
		data () {
			return {
			}
		},
		components: {Header, Bottom, Breadcrumb},
		mounted () {},
		computed: {
			activePatch () {
				return this.$route.path
			}
		}
	}
</script>
