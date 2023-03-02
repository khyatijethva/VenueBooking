import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VenueView from '../views/VenuePage.vue'
import ContactView from '../views/ContactPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUp from '../views/SignupPage.vue'
import ForgotPass from '../views/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/venues',
    name: 'venues',
    component: VenueView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPass',
    component: ForgotPass
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
