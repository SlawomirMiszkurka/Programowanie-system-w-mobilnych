import CompleteProfilePage from '@/components/CompleteProfilePage.vue';
import HomePage from '@/components/HomePage.vue';
import LoginPage from '@/components/LoginPage.vue';
import MessagesListPage from '@/components/MessagesListPage.vue';
import MessagesPage from '@/components/MessagesPage.vue';
import NewContactsPage from '@/components/NewContactsPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import WelcomePage from '@/components/WelcomePage.vue';
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    { path: '/', component: WelcomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/completeProfile', component: CompleteProfilePage },
    { path: '/home', component: HomePage },
    { path: '/messagesList', component: MessagesListPage },
    { path: '/messages/:uid', component: MessagesPage },
    { path: '/newContacts', component: NewContactsPage }
];


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;