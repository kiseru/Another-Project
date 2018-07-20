<template>
  <main role="main" class="container pt-5">
    <div class="bg-white rounded p-3 shadow mx-auto text-center" style="width: 25rem">
      <h3 class="border-bottom">Войти</h3>
      <div class="mt-3">
        <div class="form-group">
          <label for="loginInput">E-mail</label>
          <input class="form-control"
                 id="loginInput"
                 type="text"
                 v-model="user.email">
        </div>

        <div class="form-group">

          <label for="passwordInput">Пароль</label>
          <input class="form-control"
                 id="passwordInput"
                 type="password"
                 v-model="user.password">
        </div>
      </div>

      <div class="pt-2">
        <button class="btn btn-primary w-100"
                @click="logIn">Войти</button>
      </div>
    </div>
  </main>
</template>

<script>
  import axios from "axios";

  export default {
    name: "LogInComponent",
    data() {
      return {
        user: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      logIn() {
        axios.post(`${this.$store.state.globalUrl}/users/login`);
      }
    }
  }
</script>
