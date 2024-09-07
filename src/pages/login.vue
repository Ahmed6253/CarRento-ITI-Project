<template>
  <div
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="flex custom-shadow m-4 lg:h-[680px] rounded-2xl mx-auto lg:w-[1064px] w-[364px] bg-white max-h-screen"
    >
      <div v-if="OwnerorUser" class="mx-auto my-auto">
        <h1 class="text-3xl text-center mb-10 font-bold">Are you?</h1>
        <div class="flex gap-9">
          <div>
            <button @click="setrole('user')">
              <img src="../assets/user.png" />
              <p class="text-center text-2xl mt-6">Car Renter</p>
            </button>
          </div>
          <div>
            <button @click="setrole('owner')">
              <img src="../assets/owner.png" />
              <p class="text-center text-2xl mt-6">Car Owner</p>
            </button>
          </div>
        </div>
      </div>
      <img
        v-if="!signup && !OwnerorUser"
        src="../assets/login.png"
        class="w-6/12 rounded-lg hidden lg:block"
      />
      <div
        v-if="signup && !OwnerorUser && role == 'user'"
        class="signUp lg:w-6/12 w-full p-4"
      >
        <div class="flex gap-3 justify-start items-center">
          <img
            src="../imagesNavfoot/arrow_back.svg"
            alt=""
            @click="closeModal"
          />
          <p class="text-primary_color font-semibold text-2xl">
            Get Started Now
          </p>
        </div>
        <div class="flex flex-col lg:ml-9 mx-auto">
          <label
            class="text-base pt-3 text-primary_color font-medium pb-1"
            for=""
            >Name</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="text"
            placeholder="Enter your name"
          />
          <label
            class="text-base pt-3 text-primary_color font-medium pb-1"
            for=""
            >Email address</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="email"
            placeholder="Enter your Email address"
          />
          <label
            class="text-base pt-3 text-primary_color font-medium pb-1"
            for=""
            >Password</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="text"
            placeholder="Enter your password"
          />
          <label
            class="text-base pt-3 text-primary_color font-medium pb-1"
            for=""
            >Confirm password</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="text"
            placeholder="Re-enter your password"
          />
        </div>
        <div class="lg:ml-9 mx-auto flex flex-col gap-3">
          <div class="flex gap-2 items-center py-1">
            <label class="">
              <input type="checkbox" class="input" id="sedan" value="sedan" />
              <span class="custom-checkbox"></span>
            </label>
            <p>
              I agree to the
              <router-link
                class="text-primary_color underline font-medium"
                to="/"
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
        <div class="lg:ml-9 mx-auto flex items-center pt-4 gap-3">
          <div class="h-[1px] w-full bg-border_color"></div>

          <p class="text-base text-primary_color">Or</p>

          <div class="h-[1px] w-full bg-border_color"></div>
        </div>
        <div class="lg:ml-9 mx-auto pt-4 flex gap-8 justify-center">
          <img src="../imagesNavfoot/Google.svg" alt="" />
          <img src="../imagesNavfoot/facebook.svg" alt="" />
        </div>
        <div class="lg:ml-9 mx-auto flex pt-3 justify-center">
          <p class="text-xl">
            Have an account?
            <button
              class="text-primary_color text-xl underline font-medium"
              @click="signup = false"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>

      <img
        v-if="signup && !OwnerorUser"
        src="../assets/login.png"
        class="w-6/12 rounded-lg hidden lg:block"
      />
      <!--------------------------------- login --------------------------------->

      <div
        v-if="!signup && !OwnerorUser"
        class="login lg:w-6/12 w-full px-4 lg:pt-24 py-12"
      >
        <div class="flex gap-3 lg:ml-9 justify-start items-center">
          <img
            src="../imagesNavfoot/arrow_back.svg"
            alt=""
            @click="closeModal"
            class="pt-2"
          />
          <p class="text-primary_color font-semibold text-3xl">welcome back!</p>
        </div>
        <div class="flex flex-col lg:ml-9 mx-auto">
          <label
            class="text-base pt-3 text-primary_color font-medium pb-1"
            for=""
            >Email address</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="email"
            placeholder="Enter your Email address"
          />
          <label
            class="text-base pt-3 text-primary_color font-medium pb-1"
            for=""
            >Password</label
          >
          <input
            class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <div class="lg:ml-9 mx-auto flex flex-col gap-3">
          <div class="flex gap-2 items-center py-1">
            <label class="">
              <input type="checkbox" class="input" id="sedan" value="sedan" />
              <span class="custom-checkbox"></span>
            </label>
            <p>Remember me</p>
          </div>
          <button
            class="text-white text-base bg-primary_color w-full py-3 rounded-lg"
          >
            login
          </button>
        </div>
        <div class="lg:ml-9 mx-auto flex items-center pt-4 gap-3">
          <div class="h-[1px] w-full bg-border_color"></div>

          <p class="text-base text-primary_color">Or</p>

          <div class="h-[1px] w-full bg-border_color"></div>
        </div>
        <div class="lg:ml-9 nx-auto pt-4 flex gap-8 justify-center">
          <img src="../imagesNavfoot/Google.svg" alt="" />
          <img src="../imagesNavfoot/facebook.svg" alt="" />
        </div>
        <div class="lg:ml-9 mx-auto flex pt-3 justify-center">
          <p class="text-xl">
            Don’t have an account?
            <button
              class="text-primary_color text-xl underline font-medium"
              @click="checkrole"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      signup: false,
      OwnerorUser: false,
    };
  },
  computed: {
    ...mapState(["isModalOpen", "role"]),
  },
  methods: {
    closeModal() {
      this.signup = false;
      this.$store.dispatch("closeModal");
    },
    checkrole() {
      this.signup = true;
      this.OwnerorUser = true;
    },
    setrole(type) {
      this.$store.dispatch("setrole", type);
      if (type == "user") {
        this.OwnerorUser = false;
        this.signup = true;
      }
    },
  },
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
