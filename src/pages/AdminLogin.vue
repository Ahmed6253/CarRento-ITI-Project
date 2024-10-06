<template>
  <div class="mx-4 md:mx-20 lg:mx-44 lg:px-32 py-32 min-h-screen">
    <div>
      <p
        class="text-primary_color font-semibold lg:text-3xl text-2xl mb-3 text-center"
      >
        {{ $t("adminLogin.welcome_back") }}
      </p>
      <p class="text-gray-500 lg:text-xl text-lg mb-3 text-center">
        {{ $t("adminLogin.sign_in") }}
      </p>
      <form @submit.prevent="login">
        <div class="flex flex-col lg:ml-9 w-full">
          <label
            class="text-base lg:pt-5 pt-3 text-primary_color font-medium pb-1"
            for=""
            >{{ $t("adminLogin.username_label") }}</label
          >
          <input
            class="py-3 ps-4 text-base rounded-lg border-border_color border-[1px]"
            type="text"
            :placeholder='$t("adminLogin.username_placeholder")'
            v-model="loginName"
          />

          <label
            class="text-base lg:pt-5 pt-3 text-primary_color font-medium pb-1"
            for=""
            >{{ $t("adminLogin.password_label") }}</label
          >
          <input
            class="lg:py-3 py-2 ps-4 text-base rounded-lg border-border_color border-[1px]"
            type="password"
            :placeholder='$t("adminLogin.password_placeholder")'
            v-model="loginPass"
          />
        </div>

        <div class="lg:ml-9 mx-auto flex flex-col w-full">
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
            <p class="text-primary_color">{{ $t("adminLogin.remember_me") }}</p>
          </div>
          <button
            type="submit"
            class="text-white text-base bg-primary_color lg:py-3 py-2 ps-4 rounded-lg w-full"
          >
            {{ $t("adminLogin.login_button") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminLogin",
  data() {
    return {
      loginName: "",
      loginPass: "",
      rememberUser: false,
    };
  },
  methods: {
    login() {
      axios
        .get("https://carrento-9ea05-default-rtdb.firebaseio.com/admins.json")
        .then((response) => {
          const admins = response.data;

          // Use Object.values to get array of admin objects
          const foundAdmin = Object.values(admins).find(
            (admin) =>
              admin.name === this.loginName && admin.password === this.loginPass
          );

          if (foundAdmin) {
            this.currentAdmin = foundAdmin;
            console.log(`the current admin is: ${this.currentAdmin}`);

            // Save the admin data based on 'rememberUser' flag
            if (this.rememberUser) {
              localStorage.setItem("currentAdmin", JSON.stringify(foundAdmin));
            } else {
              sessionStorage.setItem(
                "currentAdmin",
                JSON.stringify(foundAdmin)
              );
            }

            // Redirect to admin dashboard
            this.$router.push("/admin");
          } else {
            alert(this.$t("adminLogin.wrong_credentials"));
          }
        })
        .catch((error) => {
          console.log(`this.$t("adminLogin.error_fetching_data") :${error}`);
        });
    },
  },
};
</script>
