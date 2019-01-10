import Vue from 'vue'
import Vuex from 'vuex'
const eventList = require('../data/events.json')
const tagList = require('../data/tags.json')
const userList = require('../data/users.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		events: eventList,
		tags: tagList,
		users: userList
  },
  mutations: {

  },
  actions: {

  }
})
