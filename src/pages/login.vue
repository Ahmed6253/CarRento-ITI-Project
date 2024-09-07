<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="flex custom-shadow m-4 lg:h-[680px] rounded-2xl mx-auto lg:w-[1064px] w-[364px] h-[464px] bg-white"
    >
      <div v-if="OwnerorUser" class="mx-auto my-auto p-6">
        <img src="../imagesNavfoot/arrow_back.svg" alt="" @click="closeModal" />
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
      <div v-if="signup && !OwnerorUser" class="signUp lg:w-6/12 w-full p-4">
        <div class="flex gap-3 justify-start items-center">
          <img
            src="../imagesNavfoot/arrow_back.svg"
            alt=""
            @click="closeModal"
          />
          <p class="text-primary_color font-semibold lg:text-2xl text-lg">
            Get Started Now
          </p>
        </div>

        <form @submit.prevent="signUp">
          <div class="flex flex-col lg:ml-9 mx-auto">
            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for=""
              >Name</label
            >
            <input
              class="lg:py-3 py-1 pl-4 text-base rounded-lg border-border_color border-[1px]"
              type="text"
              placeholder="Enter your name"
              v-model.trim="form.userName"
              :class="{ error: nameError }"
              @input="validateName"
            />
            <p v-if="nameError" class="error-message">
              Name must be at least 3 characters and contain letters only.
            </p>
            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for=""
              >Email address</label
            >
            <input
              class="lg:py-3 py-1 pl-4 text-base rounded-lg border-border_color border-[1px]"
              type="email"
              placeholder="Enter your Email address"
              v-model.trim="form.email"
              :class="{ error: emailError }"
              @input="validateEmail"
            />
            <p v-if="emailError" class="error-message">
              Please enter a valid email.
            </p>

            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for=""
              >Password</label
            >
            <input
              class="lg:py-3 py-1 pl-4 lg:text-base text-sm rounded-lg border-border_color border-[1px]"
              type="Password"
              placeholder="Enter your password"
              v-model.trim="form.password"
              :class="{ error: passwordError }"
              @input="validatePassword"
            />
            <p v-if="passwordError" class="error-message">
              Password must be at least 6 characters and contain letters and
              numbers.
            </p>
            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for=""
              >Confirm password</label
            >
            <input
              class="lg:py-3 py-1 pl-4 text-base rounded-lg border-border_color border-[1px]"
              type="password"
              placeholder="Re-enter your password"
              v-model.trim="form.confirmPassword"
            />
          </div>
          <div class="lg:ml-9 mx-auto flex flex-col gap-3">
            <div class="flex gap-2 items-center py-1">
              <label class="">
                <input
                  type="checkbox"
                  class="input"
                  id="sedan"
                  value="sedan"
                  name="sedan"
                  required
                />
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
              type="submit"
              class="text-white text-base bg-primary_color w-full lg:py-3 py-2 rounded-lg"
            >
              sign up
            </button>
          </div>
          <div class="lg:ml-9 mx-auto flex items-center lg:pt-4 pt-1 gap-3">
            <div class="h-[1px] w-full bg-border_color"></div>

            <p class="text-base text-primary_color">Or</p>

            <div class="h-[1px] w-full bg-border_color"></div>
          </div>
          <div class="lg:ml-9 mx-auto lg:pt-4 pt-1 flex gap-8 justify-center">
            <img src="../imagesNavfoot/Google.svg" alt="" />
            <img src="../imagesNavfoot/facebook.svg" alt="" />
          </div>
          <div class="lg:ml-9 mx-auto flex lg:pt-3 pt-1 justify-center">
            <p class="lg:text-xl text-base">
              Have an account?
              <button
                class="text-primary_color lg:text-xl text-base underline font-medium"
                @click="signup = false"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>

      <img
        v-if="signup && !OwnerorUser"
        src="../assets/login.png"
        class="w-6/12 rounded-lg hidden lg:block"
      />
      <!--------------------------------- login --------------------------------->

      <div
        v-if="!signup && !OwnerorUser"
        class="login lg:w-6/12 w-full px-4 lg:pt-24 lg:py-12 py-6"
      >
        <div class="flex gap-3 lg:ml-9 justify-start items-center">
          <img
            src="../imagesNavfoot/arrow_back.svg"
            alt=""
            @click="closeModal"
            class="lg:pt-2 pt-0 pb-2 pb-4"
          />
          <p class="text-primary_color font-semibold lg:text-3xl text-2xl mb-3">
            welcome back!
          </p>
        </div>

        <form @submit.prevent="loginFun">
          <div class="flex flex-col lg:ml-9 mx-auto">
            <label
              class="text-base lg:pt-3 pt-2 text-primary_color font-medium pb-1"
              for=""
              >Email address</label
            >
            <input
              class="py-3 pl-4 text-base rounded-lg border-border_color border-[1px]"
              type="email"
              placeholder="Enter your Email address"
              v-model="form.email"
            />

            <label
              class="text-base lg:pt-3 pt-2 text-primary_color font-medium pb-1"
              for=""
              >Password</label
            >
            <input
              class="lg:py-3 py-2 pl-4 text-base rounded-lg border-border_color border-[1px]"
              type="password"
              placeholder="Enter your password"
              v-model="form.password"
            />
          </div>

          <div class="lg:ml-9 mx-auto flex flex-col gap-3">
            <div class="flex gap-2 items-center py-1">
              <label class="">
                <input
                  type="checkbox"
                  class="accent-gray-900"
                  id="remembeUser"
                  value="rememberUser"
                  v-model="form.rememberUser"
                />
              </label>
              <p>Remember me</p>
            </div>

            <button
              type="submit"
              class="text-white text-base bg-primary_color w-full py-3 rounded-lg"
            >
              login
            </button>
          </div>
        </form>

        <div class="lg:ml-9 mx-auto flex items-center pt-4 gap-3">
          <div class="h-[1px] w-full bg-border_color"></div>

          <p class="text-base text-primary_color">Or</p>

          <div class="h-[1px] w-full bg-border_color"></div>
        </div>
        <div class="lg:ml-9 nx-auto lg:pt-4 pt-2 flex gap-8 justify-center">
          <img src="../imagesNavfoot/Google.svg" alt="" />
          <img src="../imagesNavfoot/facebook.svg" alt="" />
        </div>
        <div class="lg:ml-9 mx-auto flex lg:pt-3 pt-2 justify-center">
          <p class="lg:text-xl text-lg">
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
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      signup: false,
      OwnerorUser: false,
      emailError: false,
      nameError: false,
      passwordError: false,
      form: {
        id: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        currentUser: {},
        rememberUser: false,
      },
    };
  },
  computed: {
    ...mapState(["isModalOpen", "role"]),
  },
  methods: {
    closeModal() {
      if (this.form.role == "owner") {
        this.$router.push("/ownerDash");
      }
      this.signup = false;
      this.$store.dispatch("closeModal");
      this.OwnerorUser = false;
    },
    checkrole() {
      this.signup = true;
      this.OwnerorUser = true;
    },
    setrole(type) {
      this.$store.dispatch("setrole", type);
      this.form.role = type;

      this.OwnerorUser = false;
      this.signup = true;
    },
    validateName() {
      const nameRegex = /^[A-Za-z\s]{3,}$/;

      if (!nameRegex.test(this.form.userName)) {
        this.nameError = true;
        console.log(1);
        return;
      } else {
        this.nameError = false;
        console.log(2);
      }
      if (this.form.password !== this.form.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(this.form.password)) {
        this.passwordError = true;
        return;
      } else {
        this.passwordError = false;
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.emailError = true;
        return;
      } else {
        this.emailError = false;
      }
    },
    signUp() {
      this.form.id = this.form.email.replace(/[@.]/g, "");
      axios
        .put(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${this.form.id}.json`,
          {
            id: this.form.id,
            userName: this.form.userName,
            email: this.form.email,
            password: this.form.password,
            confirmPassword: this.form.confirmPassword,
            role: this.form.role,
          }
        )
        .then((response) => {
          console.log(response.data);
          this.closeModal();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    // ---------------------------------login functions------------------------------------
    loginFun() {
      axios
        .get("https://carrento-9ea05-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
          console.log(response.data);
          const users = response.data; // The users object from your JSON file
          const foundUser = Object.values(users).find(
            (user) =>
              user.email === this.email && user.password === this.password
          );

          if (foundUser) {
            this.currentUser = foundUser;

            // whether to save the user data or not
            if (this.rememberUser) {
              localStorage.setItem("currentUser", JSON.stringify(foundUser));
            } else {
              sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
            }

            //redirect based on role
            if (foundUser.role == "renter") {
              this.closeModal();
              this.$router.push("/");
            } else if (foundUser.role == "owner") {
              this.closeModal();
              this.$router.push("/ownerdash");
            }
          } else {
            // If no user matches, display an error
            alert("You're not a registered user, let's sign you up");
            this.checkrole();
          }
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
  },
};
</script>
<style scoped>
.error {
  border: 2px solid red;
}

.error-message {
  color: red;
  font-size: 14px;
}
</style>
