import Vue from 'vue'
import Vuex from 'vuex'
import eventList from '@/data/events.json'
import tagList from '@/data/tags.json'
import userList from '@/data/users.json'

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
