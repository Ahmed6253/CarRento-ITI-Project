<template>
  <div class="flex custom-shadow p-8 my-4 rounded-2xl mx-auto w-[1064px] ">
    <div class="signUp w-6/12 p-4">
      <div class="flex gap-3 justify-start items-center">
        <img src="../imagesNavfoot/arrow_back.svg" alt="" />
        <p class="text-primary_color font-semibold text-2xl">Get Started Now</p>
      </div>
      <div class="flex flex-col ml-9">
        <label class="text-base pt-3 text-primary_color font-medium pb-1" for=""
          >Name</label
        >
        <input
          class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
          type="text"
          placeholder="Enter your name"
        />
        <label class="text-base pt-3 text-primary_color font-medium pb-1" for=""
          >Email address</label
        >
        <input
          class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
          type="email"
          placeholder="Enter your Email address"
        />
        <label class="text-base pt-3 text-primary_color font-medium pb-1" for=""
          >Password</label
        >
        <input
          class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
          type="text"
          placeholder="Enter your password"
        />
        <label class="text-base pt-3 text-primary_color font-medium pb-1" for=""
          >Confirm password</label
        >
        <input
          class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
          type="text"
          placeholder="Re-enter your password"
        />
      </div>
      <div class="ml-9 flex flex-col gap-3">
        <div class="flex gap-2 items-center py-1">
          <label class="">
            <input type="checkbox" class="input" id="sedan" value="sedan" />
            <span class="custom-checkbox"></span>
          </label>
          <p>
            I agree to the
            <router-link class="text-primary_color underline font-medium" to="/"
              >terms & policy</router-link
            >
          </p>
        </div>
        <button
          class="text-white text-base bg-primary_color w-full py-3 rounded-lg"
        >
          sign up
        </button>
      </div>
      <div class="ml-9 flex items-center pt-4 gap-3">
        <div class="h-[1px] w-full bg-border_color"></div>

        <p class="text-base text-primary_color">Or</p>

        <div class="h-[1px] w-full bg-border_color"></div>
      </div>
      <div class="ml-9 pt-4 flex gap-8 justify-center">
        <img src="../imagesNavfoot/Google.svg" alt="" />
        <img src="../imagesNavfoot/facebook.svg" alt="" />
      </div>
      <div class="ml-9 flex pt-3 justify-center">
        <p class="text-xl">
          Have an account?
          <router-link
            class="text-primary_color text-xl underline font-medium"
            to="/"
            >Sign In</router-link
          >
        </p>
      </div>
    </div>

    <!--------------------------------- login --------------------------------->

    <div class="login w-6/12 px-4 pt-24 ">
      <div class="flex gap-3 ml-9 justify-start items-center">
        <p class="text-primary_color font-semibold text-3xl">welcome back!</p>
      </div>
      <form @submit.prevent>
      <div class="flex flex-col ml-9">
        <label class="text-base pt-3 text-primary_color font-medium pb-1" for=""
          >Email address</label
        >
        <input
          class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
          type="email"
          placeholder="Enter your Email address"
          name="email"
          v-model = "email"
        />
        <label class="text-base pt-3 text-primary_color font-medium pb-1" for="password"
          >Password</label
        >
        <input
          class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
          type="text"
          placeholder="Enter your password"
          v-model = "password"
          name="password"
        />
      </div>
      <div class="ml-9 flex flex-col gap-3">
        <div class="flex gap-2 items-center py-1">
          <label class="">
            <input type="checkbox" class="input" id="rememberUser" value="rememberUser" v-model="rememberUser" />
            <span class="custom-checkbox"></span>
          </label>
          <p>
            Remember me
          </p>
        </div>
        <button
          type="submit"
          @click="login"
          class="text-white text-base bg-primary_color w-full py-3 rounded-lg"
        >
          login
        </button>
      </div>
    </form>
      <div class="ml-9 flex items-center pt-4 gap-3">
        <div class="h-[1px] w-full bg-border_color"></div>

        <p class="text-base text-primary_color">Or</p>

        <div class="h-[1px] w-full bg-border_color"></div>
      </div>
      <div class="ml-9 pt-4 flex gap-8 justify-center">
        <img src="../imagesNavfoot/Google.svg" alt="" />
        <img src="../imagesNavfoot/facebook.svg" alt="" />
      </div>
      <div class="ml-9 flex pt-3 justify-center">
        <p class="text-xl">
          Don’t have an account? 
          <router-link
            class="text-primary_color text-xl underline font-medium"
            to="/"
            >Sign up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: "LoginPage",  

  data(){
    return{
      userFlag: "",
      email: "",
      password: "",
      RememberUser: "",
    }
  },
  methods: {
    login() {
      axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/owner.json")
      .then((res)=> {
        if(this.userFlag === "owner"){
          for (let user of res.data){
            if(
              user.email === this.email && 
              user.password === this.password &&
              user.type === "owner"
            ){
              this.$router.push("/ownerDashboard");
              return;
            }
            else if(
              user.email === this.email && 
              user.password === this.password &&
              user.type === "user"
            ){
              this.$router.push("/");
              return;
            }
          }
          alert("you're not registered, Let's sign you up")
        }
      })
      .catch((error)=>{
        console.error(error)
      });

  }
};
</script>
<style scoped>
.input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1.8px solid #6b7280;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.custom-checkbox::after {
  content: "";
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-55%, -55%);
  width: 8px;
  height: 8px;
  background-color: #6b7280;
  border-radius: 2px;
  opacity: 0;
}

.input[type="checkbox"]:checked + .custom-checkbox::after {
  opacity: 1;
}
</style>
