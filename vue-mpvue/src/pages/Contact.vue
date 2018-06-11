<template>
	<div>
		<div id="main">
			<Breadcrumb :activePatch="activePatch"/>
			about me!
		</div>
		<Bottom/>
	</div>
</template>
<script type="text/javascript">
	import Bottom from '@/components/Bottom.vue'
	import Breadcrumb from '@/components/Breadcrumb.vue'
	export default {
		data () {
			return {
			}
		},
		components: {Bottom, Breadcrumb},
		mounted () {},
		computed: {
			activePatch () {
				return this.$route.path
			}
		}
	}
</script>
