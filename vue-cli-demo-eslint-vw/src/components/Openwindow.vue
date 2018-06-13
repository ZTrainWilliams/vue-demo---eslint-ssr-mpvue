<template>
	<div>
		<Header/>
		<iframe :src="iframeSrc" id="main" target="_self" security="restricted" sandbox=""></iframe>
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
		components: {Header},
		mounted () {
			this.iframeSrc = this.$route.query.a
		}
	}
</script>
