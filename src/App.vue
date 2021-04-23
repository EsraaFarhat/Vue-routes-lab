<template>
<nav class="navbar navbar-expand-md bg-dark navbar-dark p-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-12 col-md-10" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
              <router-link class="text-light m-2" to="/"><b>Home</b></router-link>
            </li>
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
              <router-link class="text-light m-2" to="/products">Products</router-link>
            </li>
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                <router-link class="text-light m-2" to="/about">About</router-link>
            </li>
          </ul>
        </div>   
          <div class=" collapse navbar-collapse ml-3" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                <router-link class="text-light m-2" to="/register">Register</router-link>
              </li>
           </ul>
         </div>  
</nav>

			<router-view ></router-view>

</template>

<script>
import homeComponent from './components/homeComponent.vue'

export default {
  name: 'App',
  components: {
    homeComponent,
  }
}
</script>

<style>
  
</style>
