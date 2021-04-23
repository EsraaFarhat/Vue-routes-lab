<template>
    <div class="container">
        <div class="row justify-content-between align-items-center bg-secondary my-2 px-3" v-for="product in products" :key="product.id">
            <div>
                <router-link :to="'/products/'+product.id">
                    <img :src="product.image" style="width:200px;height:200px;border-radius:50%" :title="product.name">
                </router-link>
            </div>
                <div>
                    <p style="color:white; font-size:25px;">{{product.name}}</p>
                </div>
        </div>
    </div>
</template>

<script>
import { products } from '../products.js';
export default {
    data(){
        return{
            products:products
        }
    },
    methods: {
        test(){
            console.log(this.products);
        }
    },
}
</script>