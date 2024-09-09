<template>
  <div class="mx-4 md:mx-20 lg:mx-44 lg:px-32 py-32  min-h-screen">
    <div>
      <p
        class="text-primary_color font-semibold lg:text-3xl text-2xl mb-3 text-center"
      >
        welcome back!
      </p>
      <p
        class="text-gray-500 lg:text-xl text-lg mb-3 text-center"
      >
        Sign in to Access your Admin dashboard
      </p>
      <form @submit.prevent="login">
        <div class="flex flex-col lg:ml-9 w-full">
          <label
            class="text-base lg:pt-5 pt-3 text-primary_color font-medium pb-1"
            for=""
            >User Name</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="text"
            placeholder="Enter your User name"
            v-model="loginName"
          />

          <label
            class="text-base lg:pt-5 pt-3 text-primary_color font-medium pb-1 "
            for=""
            >Password</label
          >
          <input
            class="lg:py-3 py-2 pl-4 text-base rounded-lg border-border_color border-[1px] "
            type="password"
            placeholder="Enter your password"
            v-model="loginPass"
          />
        </div>

        <div class="lg:ml-9 mx-auto flex flex-col">
          <div class="flex gap-2 items-center pt-5 pb-5">
            <label class="">
              <input
                type="checkbox"
                class="accent-gray-900"
                id="remembeUser"
                value="rememberUser"
                v-model="rememberUser"
              />
            </label>
            <p>Remember me</p>
          </div>

          <button
            type="submit"
            class="text-white text-base bg-primary_color py-3 rounded-lg "
          >
            login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default{
  name: "AdminLogin",
  data(){
    return{
      loginName: '',
      loginPass: '',
      rememberUser: false
    }
  },
  methods:{
    login() {
  axios.get('https://carrento-9ea05-default-rtdb.firebaseio.com/admins.json')
    .then((response) => {
      console.log(response.data);
      const admins = response.data;

      // Use Object.values to get array of admin objects
      const foundAdmin = Object.values(admins).find((admin) => 
        admin.name === this.loginName && admin.password === this.loginPass
      );

      if (foundAdmin) {
        this.currentUser = foundAdmin;

        // Save the admin data based on 'rememberUser' flag
        if (this.rememberUser) {
          localStorage.setItem('currentUser', JSON.stringify(foundAdmin));
        } else {
          sessionStorage.setItem('currentUser', JSON.stringify(foundAdmin));
        }

        // Redirect to admin dashboard
        this.$router.push('/admin');
      } else {
        alert("Wrong username or password");
      }
    })
    .catch((error) => {
      console.log(`Error fetching data: ${error}`);
    });
},
// checkAuthentication() {
//     const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
//     console.log('Saved user:', savedUser); // Debug line

//     if (!savedUser) {
//       alert("Please login first");
//       this.$router.push('/adminlogin');
//     }
//   }

  },

  // mounted(){
  //   this.checkAuthentication();
  // },
}
</script>
