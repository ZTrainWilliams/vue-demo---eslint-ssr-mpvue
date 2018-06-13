const state = {
	navData: {},
	webhit: '浏览0次'
}

const mutations = {
	getNav (state, o) {
		console.log(o)
		state.navData = o
		state.webhit = '浏览' + o.webhit + '次'
	}
}

export default {state, mutations}
