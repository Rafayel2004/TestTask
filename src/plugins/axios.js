import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://task-api.loc/api'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
Vue.use(VueAxios, axios)