<template>
<body>
    <div class="container jumbotron align-items-center col-md-6">
        <h2 class="align-middle">Register with us</h2>
        <form class="needs-validation" method="get" @submit="checkForm" novalidate="true">
            <div class="mb-3 col-12">
                <p v-if="errors.length">
                    <ul>
                        <li v-for="error in errors" :key="error" >{{ error }}</li>
                    </ul>
                </p>
            </div>
            <div class="col-md-12 mb-3" >
                <input type="text" class="form-control mt-2" id="fname" name="fname" v-model="inputs.fname" placeholder="First name">
               
            </div>
            <div class="col-md-12 mb-3">
                <input type="text" class="form-control" id="lname" name="lname" v-model="inputs.lname" placeholder="Last name">
                
            </div>
            <div class="col-md-12 mb-3">
                <input type="text" class="form-control" id="address" name="address" v-model="inputs.address" placeholder="Address">
               
            </div>
            <div class="col-md-12 mb-3">
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="inputs.email">
                
            </div>
            <div class="col-md-12 mb-3">
                <input type="number" class="form-control" id="age" name="age" pattern="[0-9]{1,2}" v-model="inputs.age" placeholder="Age">
            </div >
            <div id="buttons">
            <button class="btn btn-primary mt-4 col-4 " type="submit">Submit</button>
            <button class="btn btn-primary mt-4 offset-1 col-4" type="reset">Reset</button>
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
                fname:"",
                lname:"",
                address:"",
                email:"",
                age:null,
            },
            errors:[],
        }
    },
    methods: {
        checkForm: function(e){
            e.preventDefault();

            if (this.nameValidation(this.inputs.fname) && this.nameValidation(this.inputs.lname) && this.inputs.address && this.emailValidation(this.inputs.email) && this.ageValidation(this.inputs.age)) {
                this.$router.push('/login');
                return true;
            }

            this.errors = []
            if (!this.nameValidation(this.inputs.fname)) {
                this.errors.push('First name should be >= 3.');
            }
            if (!this.nameValidation(this.inputs.lname)) {
                this.errors.push('Last name should be >= 3.');
            }
            if (!this.inputs.address) {
                this.errors.push('Address is not valid.');
            }
            if (!this.emailValidation(this.inputs.email)) {
                this.errors.push('Email is not valid.');
            }
            if (!this.ageValidation(this.inputs.age)) {
                this.errors.push('Age is not valid.');
            }
            
    },
    nameValidation:function(name){
        return name.length >= 3 ? true : false;
    },
    emailValidation:function(email){
        let re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    ageValidation:function(age){
        let re= /^[0-9]{1,3}$/;
        return re.test(age);
    }
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
    color: white;
}

.jumbotron{
    background-color:rgb(43, 44, 43) ;
    border-radius: 10px;
    opacity: 0.9;
}
input{
    height: 50px;
}
#buttons{
    text-align: center;
}
li{
    font-size: 20px;
    color: red;
}
</style>