<template>
<body>
    <div class="container jumbotron align-items-center col-md-6"> 
        <h2 class="align-middle">Login to our site</h2>
        <form class="needs-validation" method="get" @submit="checkForm" >
            <div class="mb-3 col-12">
                <p v-if="errors.length">
                    <ul>
                        <li v-for="error in errors" :key="error" >{{ error }}</li>
                    </ul>
                </p>
            </div>
            <div class="col-md-12 mb-4" >
                <input type="text" class="form-control mt-2" id="username" placeholder="User Name" v-model="inputs.username">
            </div>
            <div class="col-md-12 mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="inputs.password">
            </div>
            <div id="buttons">
            <button class="btn btn-primary mt-4 col-md-6" type="submit">login</button>
            </div>
            <div class=" row justify-content-around mt-3"> 
                <p>Don't have an account? <router-link to="/register">Register</router-link></p>
            </div>
        </form>      
    </div>
</body>
</template>

<script>
export default {
    data(){
        return{
            inputs:{
                username:"",
                password:"",
            },
            errors:[],
        }
    },
    methods: {
        checkForm: function(e){
            if (this.inputs.username && this.inputs.password) {
                this.$router.push('/products');
                return true;
            }

            this.errors = []
            if (!this.inputs.username) {
                this.errors.push('Username required.');
            }
            if (!this.inputs.password) {
                this.errors.push('Password required.');
            }
            
            e.preventDefault();
    },
}
}
</script>

<style scoped>
    body{
    padding-top:10px;
    background-image: url(../Images/5.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 580px;
}
h2{
    margin-bottom: 40px;
    text-align: center;
}

.jumbotron{
    background-color:rgb(43, 44, 43) ;
    border-radius: 10px;
    width: 50%;
    opacity: 0.93;
}
.valid-feedback, .invalid-feedback{
    font-size: medium;
}
.valid-feedback{
    color: green;
}
.invalid-feedback{
    color: red;
}
#buttons{
    text-align: center;
}
input{
    height: 60px;
}
p,h2{
    color: white;
}
li{
    font-size: 20px;
    color: red;
}
</style>