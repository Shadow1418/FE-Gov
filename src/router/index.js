import { createRouter, createWebHistory} from 'vue-router'
import EmulationPage from '../view/EmulationPage.vue'
import Test from '../view/Test.vue'

const routes = [
    { path: '/emulation', component: EmulationPage },
    { path: '/setting', component: Test },
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router