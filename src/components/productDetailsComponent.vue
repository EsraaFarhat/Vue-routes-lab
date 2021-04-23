<template>
  <div class="container mt-5">
    <div class="row">
      <!-- <h1>Product details</h1> -->
      <!-- <p>{{$route.params.productId}}</p> -->
      <!-- <p>{{id}}</p> -->
      <div class="col-3">
        <img :src="targetProduct.image" style="width:250px;height:250px;" />
      </div>
      <div class="col-9">
        <p>{{ targetProduct.description }}</p>
      </div>
    </div>
    <div class="row mt-3">
        <h3 class="text-danger"><b>Similar products</b></h3>
       <ul class="list-group col-12">
           <router-link class="list-group-item " v-for="product in dummyProducts" :key="product.id" :to="'/products/'+product.id">
            {{product.name}}
           </router-link>
       </ul>
    </div>
  </div>
</template>

<script>
import { products } from "../products.js";

export default {
  data() {
    return {
      products: products,
      id: "",
      targetProduct: null,
      dummyProducts: [
        {
          id: 3,
          name: "Product Three",
          price: 3000,
          inStock: 500,
          description:
            "In marketing, a product is an object or system made available for consumer use; it is anything that can be offered to a market to satisfy the desire or need of a customer.[1] In retailing, products are often referred to as merchandise, and in manufacturing, products are bought as raw materials and then sold as finished goods. A service is also regarded to as a type of product.",
          image:
            "https://images.unsplash.com/photo-1619092551169-acbbaec8d817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          id: 4,
          name: "Product Four",
          price: 4000,
          inStock: 4,
          description:
            "In marketing, a product is an object or system made available for consumer use; it is anything that can be offered to a market to satisfy the desire or need of a customer.[1] In retailing, products are often referred to as merchandise, and in manufacturing, products are bought as raw materials and then sold as finished goods. A service is also regarded to as a type of product.",
          image:
            "https://images.unsplash.com/photo-1619149557955-9f3a0b450f39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          id: 5,
          name: "Product Five",
          price: 5000,
          inStock: 0,
          description:
            "In marketing, a product is an object or system made available for consumer use; it is anything that can be offered to a market to satisfy the desire or need of a customer.[1] In retailing, products are often referred to as merchandise, and in manufacturing, products are bought as raw materials and then sold as finished goods. A service is also regarded to as a type of product.",
          image:
            "https://images.unsplash.com/photo-1619149741397-60793b48a72a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
    };
  },
  created() {
    this.id = this.$route.params.productId;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == this.id) {
        this.targetProduct = this.products[i];
        break;
      }
    }
  },
  updated(){
      this.id = this.$route.params.productId;
        for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == this.id) {
            this.targetProduct = this.products[i];
            break;
        }
        }
  }
  // props:["productId"],
};
</script>
