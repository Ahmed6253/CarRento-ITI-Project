<template>
  <div class="mx-4 md:mx-20 pt-32">
    <div v-if="this.rateOpen">
      <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div class="custom-shadow m-4 rounded-2xl mx-auto w-[50%] max-h-screen bg-white ">
          <img src="../imagesNavfoot/arrow_back.svg" alt="" @click="this.rateOpen = false" class="m-6 cursor-pointer"/>
          <h1 class="text-2xl text-primary_color font-medium text-center mt-12 mb-2">Please rate the store</h1>
          <p class="text-lg text-Paragraph_color font-medium text-center mb-10">Your evaluation of us helps us
            improve the service for you</p>


          <!--stars-->
          <div class="flex justify-center mb-10">
            <div class="rating">
              <input type="radio" id="star5" name="rate" value="5" @click="this.rateCar(5)"/>
              <label for="star5" title="text"><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                  class="star-solid">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                  </path>
                </svg></label>
              <input type="radio" id="star4" name="rate" value="4" @click="this.rateCar(4)"/>
              <label for="star4" title="text"><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                  class="star-solid">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                  </path>
                </svg></label>
              <input checked="" type="radio" id="star3" name="rate" value="3" @click="this.rateCar(3)"/>
              <label for="star3" title="text"><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                  class="star-solid">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                  </path>
                </svg></label>
              <input type="radio" id="star2" name="rate" value="2" @click="this.rateCar(2)"/>
              <label for="star2" title="text"><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                  class="star-solid">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                  </path>
                </svg></label>
              <input type="radio" id="star1" name="rate" value="1" @click="this.rateCar(1)"/>
              <label for="star1" title="text"><svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                  class="star-solid">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                  </path>
                </svg></label>
            </div>
          </div>


          <!---->
          <div class="flex justify-center mb-10">
            <button @click="$router.push('/')" class="bg-primary_color text-white w-10/12 mx-auto p-3 rounded-lg mt-20 hover:bg-primary_hover">Go
              to Home</button>
          </div>
        </div>
      </div>
    </div>
    <!-- profile picture start -->
    <div class="mt-12 w-fit mx-auto relative">
      <img class="" src="../imagesNavfoot/User.svg" alt="" />
      <img class="mx-auto z-10 absolute bottom-3 right-2" src="../imagesNavfoot/edit.png" alt="" />
    </div>
    <!-------------------- profile picture end  ------------------>
    <!-------------------- section one start --------------------->
    <div class="flex flex-col justify-between custom-shadow bg-white rounded-2xl py-6 px-12 mt-6">
      <div class="flex justify-between">
        <p class="text-3xl font-semibold">Basic Information</p>
        <img class="w-8 h-8" src="../imagesNavfoot/edit.png" alt="" />
      </div>
      <div class="flex flex-col md:flex-row justify-between pt-3">
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Name</p>
          <p class="text-xl text-primary_color">{{ name }}</p>
        </div>
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Email</p>
          <p class="text-xl text-primary_color">{{ email }}</p>
        </div>
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Account Status</p>
          <p class="text-xl text-green">Active</p>
        </div>
      </div>
    </div>
    <!--------------------- section one end ----------------------->
    <!--------------------- section two start --------------------->
    <div class="custom-shadow mt-6 rounded-2xl py-6 px-12" v-for="car in this.cars " :key="car">
      <div v-for="order in this.UserOrders" :key="order">
        <p class="text-3xl font-semibold">Rentals History</p>
        <div class="custom-shadow rounded-xl py-6 px-6 mt-6">
          <p class="text-xl font-semibold">{{ car.name }}</p>
          <div class="flex flex-col lg:flex-row justify-between pt-3">
            <div class="py-3">
              <p class="text-xl text-primary_color">Pick-up location</p>
              <p class="text-base text-Paragraph_color">{{ car.location }} ,Egypt</p>
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
              <p class="text-xl text-primary_color">{{ order.TotalPrice }} LE</p>
              <p class="text-base text-Paragraph_color">Paid</p>
            </div>
            <div class="py-3">
              <!-- <button v-if="order.status === 'pending'"
                class="bg-orange-300 hover:bg-orange-100 text-white rounded-lg ml-2 px-6 py-2.5" disabled>
                Pending
              </button> -->
              <button @click="this.rateOpen = true" v-if="order.status === 'pending'"
                class="bg-primary_color hover:bg-primary_hover text-white rounded-lg ml-2 px-6 py-2.5">
                Rate the service
              </button>
              <button v-if="order.status === 'done'"
                class="bg-primary_color hover:bg-primary_hover text-white rounded-lg ml-2 px-6 py-2.5">
                Order Again
              </button>
            </div>
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
          <p class="pt-2">{{ password }}</p>
          <img class="w-8 h-8" src="../imagesNavfoot/edit.png" alt="" />
        </div>
      </div>
      <div class="border-b-[1px] border-line_color py-6 flex gap-16 items-center">
        <p class="text-xl text-primary_color">Location Sharing</p>
        <img class="pt-2" src="../imagesNavfoot/togglebutton.png" alt="" />
      </div>
      <div class="border-b-[1px] border-line_color py-6">
        <p class="text-xl text-primary_color">Payment details</p>
        <div class="custom-shadow rounded-xl flex items-center justify-between py-6 px-6 mt-6">
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
              <button class="bg-red w-full md:w-auto px-6 py-2.5 hover:bg-red_hover text-white rounded-lg">
                Delete card
              </button>
            </div>
          </div>
          <div>
            <img class="hidden md:block" src="../imagesNavfoot/visa.png" alt="" />{{ this.currentCar }}
          </div>
        </div>
      </div>
      <div>
        <button class="bg-red w-full md:w-auto px-6 py-2.5 my-6 hover:bg-red_hover text-white rounded-lg">
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

  data() {
    return {
      name: "",
      email: "",
      password: "",
      id: '',
      cars: [],
      UserOrders: [],
      rateOpen: false,
      rate: '',
      currentCarId:'',
      currentCar:'',
      ratingCount:0,
      ratingSum:0,
    }
  },
  created() {
    axios.get('https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json')
      .then((response) => {
        // console.log(response.data);
        for (let order in response.data) {
          // console.log(response.data[order]);
          if (response.data[order].renter === this.id) {
            this.UserOrders.push(response.data[order]);
            console.log(this.UserOrders);
          }
        }
        this.gitCarsfromOrders();
      })
      .catch((error) => {
        console.log(error);
      });
  },

  mounted() {
    // Retrieve the currentUser from localStorage or sessionStorage
    const storedUser = localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser");
    this.currentUser = JSON.parse(storedUser);
    this.name = this.currentUser.userName;
    this.email = this.currentUser.email;
    const pass = this.currentUser.password;
    this.id = this.currentUser.id;
    this.password = pass.replace(/./g, '*');
  },
  methods: {
    gitCarsfromOrders() {
      for (let order of this.UserOrders) {
        const CarId = order.carId;
        axios.get(`https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${CarId}.json`)
          .then((response) => {
            this.cars.push(response.data);
            // console.log("cars",this.cars);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    },
    rateCar(r){
      this.rate = r;
      console.log(this.rate);
      this.getCarforRate();
      
      axios.get(`https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${this.currentCarId}.json`)
        .then((response) => {
          this.currentCar = response.data;
          
          this.ratingCount = this.currentCar.ratingCount;
          
          this.ratingSum = this.currentCarId.ratingSum;
          
          this.ratingCount++;
          
          this.ratingSum = this.ratingSum + r;  
          axios.patch(`https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${this.currentCarId}.json`, {
            ratingCount: this.ratingCount,
            ratingSum: this.ratingSum
        }) 
      })
    },
    getCarforRate(){
      for(let order in this.UserOrders){
        if(this.UserOrders[order].status == 'pending' ){
          this.currentCarId=this.UserOrders[order].carId;
        }
      }
    }
  }


};

</script>

<style scoped>
/* From Uiverse.io by amikambs */
.rating:not(:checked)>input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked)>label {
  float: right;
  cursor: pointer;
  font-size: 30px;
  fill: #666;
}

.rating:not(:checked)>label>svg {
  fill: #666;
  /* Set default color for SVG */
  transition: fill 0.3s ease;
  /* Add a transition effect */
}

.rating>input:checked+label:hover,
.rating>input:checked+label:hover~label,
.rating>input:checked~label:hover,
.rating>input:checked~label:hover~label,
.rating>label:hover~input:checked~label {
  fill: #e58e09;
}

.rating:not(:checked)>label:hover,
.rating:not(:checked)>label:hover~label {
  fill: #ff9e0b;
}

.rating>input:checked~label>svg {
  fill: #ffa723;
  /* Set color for selected stars */
}
</style>
