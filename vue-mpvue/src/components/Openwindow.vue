<template>
	<div>
		<web-view :src="iframeSrc" id="main"></web-view>
	</div>
</template>
<script type="text/javascript">
	import Header from './Header.vue'
	export default {
		data () {
			return {
				iframeSrc: ''
			}
		},
		mounted () {
			this.iframeSrc = this.$route.query.a
		}
	}
</script>
