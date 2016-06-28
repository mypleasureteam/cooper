import {FACEBOOK_GRAPH_ME_URL, FACEBOOK_OAUTH_URL} from '../constants/config'
import {requestBody, headers} from '../services/utils'
import {FACEBOOK_URL} from '../constants/api'
import Vue from 'vue'

var facebookAuth = new Vue({
  data () {
    return {
      error: ''
    }
  },

  methods: {
    auth (token) {
      if (!token) {
        window.location = FACEBOOK_OAUTH_URL
        return Promise.resolve(true)
      }

      return this.$http.get(`${FACEBOOK_GRAPH_ME_URL}${token}`)
    },

    checkUser (payload) {
      return this.$http.post(FACEBOOK_URL, requestBody(payload), headers())
    }
  }
})

export default facebookAuth