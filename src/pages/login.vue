<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="flex custom-shadow m-4 rounded-2xl mx-auto w-[80%] max-h-screen bg-white overflow-auto"
    >
      <div v-if="OwnerorUser" class="mx-auto my-auto p-6 text-primary_color">
        <div class="py-3 lg:py-0 px-0 flex items-center">
          <svg
            @click="closeModal"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="this.$i18n.locale === 'Ar' ? 'scale-x-[-1]' : ''"
          >
            <path
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              class="fill-primary_color cursor-pointer"
            />
          </svg>
        </div>
        <h1 class="text-3xl text-center mb-10 font-bold">
          {{ $t("loginPage.areYou") }}
        </h1>
        <div class="flex gap-9">
          <div>
            <button @click="setrole('renter')">
              <img src="../assets/user.png" />
              <p class="text-center text-2xl mt-6">
                {{ $t("loginPage.carRenter") }}
              </p>
            </button>
          </div>
          <div>
            <button @click="setrole('owner')">
              <img src="../assets/owner.png" />
              <p class="text-center text-2xl mt-6">
                {{ $t("loginPage.carOwner") }}
              </p>
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
          <div class="py-3 lg:py-0 px-0 flex items-center">
            <svg
              @click="closeModal"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="this.$i18n.locale === 'Ar' ? 'scale-x-[-1]' : ''"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                class="fill-primary_color cursor-pointer"
              />
            </svg>
          </div>
          <p class="text-primary_color font-semibold lg:text-2xl text-lg">
            {{ $t("loginPage.getStarted") }}
          </p>
        </div>

        <form @submit.prevent="signUp">
          <div class="flex flex-col lg:ml-9 mx-auto">
            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for="name"
              >{{ $t("loginPage.name") }}</label
            >
            <input
              class="lg:py-3 py-1 ps-4 text-base rounded-lg border-border_color border-[1px]"
              type="text"
              :placeholder="$t('loginPage.namePlaceholder')"
              v-model.trim="form.userName"
              @blur="validateName"
              :class="{ error: nameError }"
            />
            <p v-if="nameError" class="error-message">
              {{ $t("loginPage.nameError") }}
            </p>
            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for="email"
              >{{ $t("loginPage.emailAddress") }}</label
            >
            <input
              class="lg:py-3 py-1 ps-4 text-base rounded-lg border-border_color border-[1px]"
              type="email"
              :placeholder="$t('loginPage.emailPlaceholder')"
              v-model.trim="form.email"
              @blur="validateEmail"
              :class="{ error: emailError }"
            />
            <p v-if="emailError" class="error-message">
              {{ $t("loginPage.emailError") }}
            </p>

            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for="password"
              >{{ $t("loginPage.password") }}</label
            >
            <input
              class="lg:py-3 py-1 ps-4 lg:text-base text-sm rounded-lg border-border_color border-[1px]"
              type="Password"
              :placeholder="$t('loginPage.passwordPlaceholder')"
              v-model.trim="form.password"
              :class="{ error: passwordError }"
              @blur="validatePassword"
            />
            <p v-if="passwordError" class="error-message">
              {{ $t("loginPage.passwordError") }}
            </p>
            <label
              class="lg:text-base text-sm lg:pt-3 pt-1 text-primary_color font-medium pb-1"
              for="confirmpassword"
              >{{ $t("loginPage.confirmPassword") }}</label
            >
            <input
              class="lg:py-3 py-1 ps-4 text-base rounded-lg border-border_color border-[1px]"
              type="password"
              :placeholder="$t('loginPage.confirmPasswordPlaceholder')"
              v-model.trim="form.confirmPassword"
              @blur="validatePasswordConfirm"
              :class="{ error: confirmPasswordError }"
            />
            <p v-if="confirmPasswordError" class="error-message">
              {{ $t("loginPage.confirmPasswordError") }}
            </p>
          </div>
          <div class="lg:ml-9 mx-auto flex flex-col gap-3 pt-1">
            <div
              :class="
                agreeError
                  ? 'flex gap-2 items-center py-1 border-red border rounded-lg px-2'
                  : 'flex gap-2 items-center py-1'
              "
            >
              <label>
                <input
                  type="checkbox"
                  id="agree"
                  class="accent-gray-900"
                  @click="agree = !agree"
                />
              </label>
              <p class="text-primary_color">
                {{ $t("loginPage.agree") }}
                <router-link
                  class="text-primary_color underline font-medium"
                  to="/"
                  >{{ $t("loginPage.termsPolicy") }}</router-link
                >
              </p>
            </div>
            <button
              type="submit"
              class="text-white text-base bg-primary_color w-full lg:py-3 py-2 rounded-lg"
            >
              {{ $t("loginPage.signUp") }}
            </button>
          </div>
          <div class="lg:ml-9 mx-auto flex items-center lg:pt-4 pt-1 gap-3">
            <div class="h-[1px] w-full bg-border_color"></div>

            <p class="text-base text-primary_color">{{ $t("loginPage.or") }}</p>

            <div class="h-[1px] w-full bg-border_color"></div>
          </div>

          <div
            class="lg:ml-9 mx-auto flex lg:pt-3 pt-1 justify-center text-primary_color"
          >
            <p class="lg:text-xl text-base">
              {{ $t("loginPage.alreadyHaveAccount") }}
              <button
                class="text-primary_color lg:text-xl text-base underline font-medium"
                @click="signup = false"
              >
                {{ $t("loginPage.signIn") }}
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
        class="login lg:w-6/12 w-full px-4 lg:pt-16 lg:py-12 py-6"
      >
        <p v-if="userExist" class="text-red lg:ml-9 mb-4">
          {{ $t("loginPage.alreadyHaveAccountError") }}
        </p>
        <div class="flex gap-3 lg:ml-9 justify-start items-center">
          <div class="py-3 lg:py-0 px-0 flex items-center">
            <svg
              @click="closeModal"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="this.$i18n.locale === 'Ar' ? 'scale-x-[-1]' : ''"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                class="fill-primary_color cursor-pointer"
              />
            </svg>
          </div>
          <p class="text-primary_color font-semibold lg:text-3xl text-2xl mb-3">
            {{ $t("loginPage.welcomeBack") }}
          </p>
        </div>

        <form @submit.prevent="loginFun">
          <div class="flex flex-col lg:ml-9 mx-auto">
            <label
              class="text-base lg:pt-3 pt-2 text-primary_color font-medium pb-1"
              for="log-email"
              >{{ $t("loginPage.emailAddress") }}</label
            >
            <input
              class="py-3 ps-4 text-base rounded-lg border-border_color border-[1px]"
              type="email"
              :placeholder="$t('loginPage.emailPlaceholder')"
              v-model="form.email"
              id="log-email"
            />

            <label
              class="text-base lg:pt-3 pt-2 text-primary_color font-medium pb-1"
              for="log-password"
              >{{ $t("loginPage.password") }}</label
            >
            <input
              id="log-password"
              class="lg:py-3 py-2 ps-4 text-base rounded-lg border-border_color border-[1px]"
              type="password"
              :placeholder="$t('loginPage.passwordPlaceholder')"
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
              <p class="text-primary_color">{{ $t("loginPage.rememberMe") }}</p>
            </div>
            <p v-if="loginError" class="text-red">
              {{ $t("loginPage.allFieldsRequired") }}
            </p>
            <p v-if="worngPassword" class="text-red">
              {{ $t("loginPage.wrongEmailOrPassword") }}
            </p>

            <button
              type="submit"
              class="text-white text-base bg-primary_color w-full py-3 rounded-lg"
            >
              {{ $t("loginPage.login") }}
            </button>
          </div>
        </form>

        <div class="lg:ml-9 mx-auto flex items-center pt-4 gap-3">
          <div class="h-[1px] w-full bg-border_color"></div>

          <p class="text-base text-primary_color">{{ $t("loginPage.or") }}</p>

          <div class="h-[1px] w-full bg-border_color"></div>
        </div>

        <div class="lg:ml-9 mx-auto flex lg:pt-3 pt-2 justify-center">
          <p class="lg:text-xl text-lg text-primary_color">
            {{ $t("loginPage.dontHaveAccount") }}
            <button
              class="text-primary_color text-xl underline font-medium"
              @click="checkrole"
            >
              {{ $t("loginPage.signUp") }}
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
      loginError: false,
      worngPassword: false,
      signup: false,
      OwnerorUser: false,
      emailError: false,
      nameError: false,
      passwordError: false,
      agree: false,
      agreeError: false,
      confirmPasswordError: false,
      userExist: false,

      form: {
        id: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        blocked: false,
      },
    };
  },
  computed: {
    ...mapState(["isModalOpen"]),
  },
  methods: {
    closeModal() {
      this.signup = false;
      this.$store.dispatch("closeModal");
      this.OwnerorUser = false;
    },
    checkrole() {
      this.signup = true;
      this.OwnerorUser = true;
    },
    setrole(type) {
      this.form.role = type;
      this.OwnerorUser = false;
      this.signup = true;
    },
    validateName() {
      const nameRegex = /^[A-Za-z\s]{3,}$/;

      if (!nameRegex.test(this.form.userName) || this.form.userName === "") {
        this.nameError = true;
        return;
      } else {
        this.nameError = false;
      }
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (
        !passwordRegex.test(this.form.password) ||
        this.form.password === ""
      ) {
        this.passwordError = true;
        return;
      } else {
        this.passwordError = false;
      }
    },
    validatePasswordConfirm() {
      if (
        this.form.password !== this.form.confirmPassword ||
        this.form.confirmPassword === ""
      ) {
        this.confirmPasswordError = true;
        return;
      } else {
        this.confirmPasswordError = false;
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email) || this.form.email === "") {
        this.emailError = true;
        return;
      } else {
        this.emailError = false;
      }
    },
    signUp() {
      this.form.id = this.form.email.replace(/[@.]/g, "").toLowerCase();
      const userData = {
        id: this.form.id,
        userName: this.form.userName,
        email: this.form.email.toLowerCase(),
        password: this.form.password,
        role: this.form.role,
        blocked: false,
      };
      if (userData.userName === "") {
        this.nameError = true;
        return;
      } else if (userData.email === "") {
        this.emailError = true;
        return;
      } else if (userData.password === "") {
        this.passwordError = true;
        return;
      } else if (this.form.confirmPassword === "") {
        this.confirmPasswordError = true;
        return;
      } else if (!this.agree) {
        this.agreeError = true;
        return;
      }
      if (this.form.role == "renter") {
        userData.status = "Unverified";
      }

      axios
        .get(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${userData.id}.json`
        )
        .then((response) => {
          if (response.data) {
            this.signup = false;
            this.OwnerorUser = false;
            this.userExist = true;
            this.form.password = "";
            this.form.confirmPassword = "";
            this.form.userName = "";
            return;
          } else {
            axios
              .put(
                `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${userData.id}.json`,
                userData
              )
              .then(() => {
                sessionStorage.setItem("currentUser", JSON.stringify(userData));
                if (this.form.role == "owner") {
                  this.$store.dispatch("setInOrOut");
                  this.$router.push("/ownerDash/" + userData.id);
                  console.log(userData.id);
                }
                this.closeModal();
              })
              .catch((error) => {
                console.error(error);
              });
          }
        });
    },

    // ---------------------------------login functions------------------------------------
    loginFun() {
      if (this.form.email === "" || this.form.password === "") {
        this.loginError = true;
        return;
      } else {
        this.loginError = false;
      }
      const id = this.form.email.replace(/[@.]/g, "").toLowerCase();

      axios
        .get(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${id}.json`
        )
        .then((response) => {
          this.form.currentUser = response.data;

          if (this.form.currentUser && this.form.currentUser.blocked) {
            alert(
              "Your account has been blocked. Please contact us for more details."
            );
            window.location.reload();
            return;
          }
          if (this.form.currentUser) {
            if (this.form.currentUser.password !== this.form.password) {
              this.worngPassword = true;
              return;
            }
            if (this.form.rememberUser) {
              localStorage.setItem(
                "currentUser",
                JSON.stringify(this.form.currentUser)
              );
            } else {
              sessionStorage.setItem(
                "currentUser",
                JSON.stringify(this.form.currentUser)
              );
            }

            //redirect based on role
            if (this.form.currentUser.role == "renter") {
              this.closeModal();
            } else if (this.form.currentUser.role == "owner") {
              this.closeModal();
              console.log(this.form.currentUser.id);

              this.$router.push("/ownerDash/" + this.form.currentUser.id);
            }
            this.$store.dispatch("setInOrOut");
          } else {
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
