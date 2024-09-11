<template>
  <div class="mx-4 md:mx-20 pt-32">
    <!-- profile picture start -->
    <div class="mt-12 w-fit mx-auto relative">
      <img class="" src="../imagesNavfoot/User.svg" alt="" />
      <img
        class="mx-auto z-10 absolute bottom-3 right-2"
        src="../imagesNavfoot/edit.png"
        alt=""
      />
    </div>
    <!-------------------- profile picture end  ------------------>
    <!-------------------- section one start --------------------->
    <div
      class="flex flex-col justify-between custom-shadow bg-white rounded-2xl py-6 px-12 mt-6"
    >
      <div class="flex justify-between">
        <p class="text-3xl font-semibold">Basic Information</p>
        <img class="w-8 h-8" src="../imagesNavfoot/edit.png" alt="" />
      </div>
      <div class="flex flex-col md:flex-row justify-between pt-3">
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Name</p>
          <p class="text-xl text-primary_color">{{name}}</p>
        </div>
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Email</p>
          <p class="text-xl text-primary_color">{{email}}</p>
        </div>
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Account Status</p>
          <p class="text-xl text-green">Active</p>
        </div>
      </div>
    </div>
    <!--------------------- section one end ----------------------->
    <!--------------------- section two start --------------------->
    <div class="custom-shadow mt-6 rounded-2xl py-6 px-12">
      <p class="text-3xl font-semibold">Rentals History</p>
      <div class="custom-shadow rounded-xl py-6 px-6 mt-6">
        <p class="text-xl font-semibold">Mercedes-Benz AMG</p>
        <div class="flex flex-col lg:flex-row justify-between pt-3">
          <div class="py-3">
            <p class="text-xl text-primary_color">Pick-up location</p>
            <p class="text-base text-Paragraph_color">Cairo, Egypt</p>
          </div>
          <div class="py-3">
            <p class="text-xl text-primary_color">Pick-up date</p>
            <p class="text-base text-Paragraph_color">26/08/2024</p>
          </div>
          <div class="py-3">
            <p class="text-xl text-primary_color">Drop-off date</p>
            <p class="text-base text-Paragraph_color">26/09/2024</p>
          </div>
          <div class="py-3">
            <p class="text-xl text-primary_color">22,540</p>
            <p class="text-base text-Paragraph_color">Completed</p>
          </div>
          <div class="py-3">
            <button
              class="bg-primary_color hover:bg-primary_hover text-white rounded-lg ml-2 px-6 py-2.5"
            >
              Order again
            </button>
          </div>
        </div>
      </div>
      <div class="custom-shadow rounded-xl py-6 px-6 mt-6">
        <p class="text-xl font-semibold">Mercedes-Benz AMG</p>
        <div class="flex flex-col lg:flex-row justify-between pt-3">
          <div class="py-3">
            <p class="text-xl text-primary_color">Pick-up location</p>
            <p class="text-base text-Paragraph_color">Cairo, Egypt</p>
          </div>
          <div class="py-3">
            <p class="text-xl text-primary_color">Pick-up date</p>
            <p class="text-base text-Paragraph_color">26/08/2024</p>
          </div>
          <div class="py-3">
            <p class="text-xl text-primary_color">Drop-off date</p>
            <p class="text-base text-Paragraph_color">26/09/2024</p>
          </div>
          <div class="py-3">
            <p class="text-xl text-primary_color">22,540</p>
            <p class="text-base text-Paragraph_color">Completed</p>
          </div>
          <div class="py-3">
            <button
              class="bg-green hover:bg-green_hover text-white rounded-lg ml-2 px-6 py-2.5"
            >
              Track order
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--------------------- section two end  ---------------------->
    <!--------------------- section three start  -------------------->
    <div class="custom-shadow rounded-xl mb-24 py-6 px-12 mt-6">
      <div class="border-b-[1px] border-line_color">
        <p class="text-3xl font-semibold">Settings and Privacy</p>
        <div class="flex gap-x-16 items-center py-5">
          <p class="text-xl text-primary_color">Password</p>
          <p class="pt-2">{{password}}</p>
          <img class="w-8 h-8" src="../imagesNavfoot/edit.png" alt="" />
        </div>
      </div>
      <div
        class="border-b-[1px] border-line_color py-6 flex gap-16 items-center"
      >
        <p class="text-xl text-primary_color">Location Sharing</p>
        <img class="pt-2" src="../imagesNavfoot/togglebutton.png" alt="" />
      </div>
      <div class="border-b-[1px] border-line_color py-6">
        <p class="text-xl text-primary_color">Payment details</p>
        <div
          class="custom-shadow rounded-xl flex items-center justify-between py-6 px-6 mt-6"
        >
          <div class="flex flex-col gap-x-16">
            <div class="flex-col md:flex-row gap-16">
              <div class="py-3">
                <p class="text-xl font-semibold text-primary_color">
                  card Number
                </p>
                <p class="text-base text-Paragraph_color">
                  **** **** **** 9012
                </p>
              </div>
              <div class="py-3">
                <p class="text-xl font-semibold text-primary_color">
                  Expiry date
                </p>
                <p class="text-base text-Paragraph_color">28/08/2036</p>
              </div>
            </div>
            <div>
              <button
                class="bg-red w-full md:w-auto px-6 py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete card
              </button>
            </div>
          </div>
          <div>
            <img
              class="hidden md:block"
              src="../imagesNavfoot/visa.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <button
          class="bg-red w-full md:w-auto px-6 py-2.5 my-6 hover:bg-red_hover text-white rounded-lg"
        >
          Delete account
        </button>
      </div>
    </div>
    <!--------------------- section three end  ---------------------->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProfilePage",

  data(){
    return{
      name: "",
      email:"",
      password:"",
      id:'',
      UserOrders: [],
    }
  },
  created() {
    axios.get('https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json')
    .then((response) => {
      // console.log(response.data);
      for(let order in response.data){
        // console.log(response.data[order]);
        if(response.data[order].renterName === this.id){
          console.log("hello")
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },

  mounted() {
  // Retrieve the currentUser from localStorage or sessionStorage
  const storedUser = localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser");
    this.currentUser = JSON.parse(storedUser);
    this.name = this.currentUser.userName ;
    this.email = this.currentUser.email ;
    const pass = this.currentUser.password ;
    this.id = this.currentUser.id ;
    this.password = pass.replace(/./g, '*');
}


};

</script>

<style lang="scss" scoped></style>
