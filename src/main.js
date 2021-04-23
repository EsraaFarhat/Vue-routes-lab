import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createWebHistory, createRouter } from "vue-router";
import homeComponent from './components/homeComponent.vue';
import registerComponent from './components/registerComponent.vue';
import productsComponent from './components/productsComponent.vue';
import productDetailsComponent from './components/productDetailsComponent.vue';
import aboutComponent from './components/aboutComponent.vue';
import errorComponent from './components/errorComponent.vue';

const routes=[
	{path:'/', component:homeComponent},
	{path:'/register', component:registerComponent},
	{path:'/products', component:productsComponent},
	{path:'/products/:productId', props:true,  component:productDetailsComponent},        // dynamic segment
	{path:'/about', component:aboutComponent},
	{path:'/:catchAll(.*)', component:errorComponent},
];

const router = createRouter({history:createWebHistory(), routes});

createApp(App).use(router).mount('#app')
