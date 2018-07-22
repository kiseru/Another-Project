<template>
  <main role="main" class="container">
    <div class="bg-white rounded shadow p-3 mx-auto text-center mb-5" style="width: 40rem">
      <h3 class="border-bottom">Регистрация</h3>

      <div class="mt-3">
        <div class="form-group">
          <label for="secondNameInput">Фамилия</label>
          <input class="form-control"
                 id="secondNameInput"
                 type="text"
                 v-model="user.secondName">
        </div>

        <div class="form-group">
          <label for="firstNameInput">Имя</label>
          <input class="form-control"
                 id="firstNameInput"
                 type="text"
                 v-model="user.firstName">
        </div>

        <div class="form-group">
          <label for="middleNameInput">Отчетсво</label>
          <input class="form-control"
                 id="middleNameInput"
                 type="text"
                 v-model="user.middleName">
        </div>

        <div class="mb-3">
          <p class="mb-2">Дата рождения</p>

          <div class="d-flex">
            <div class="input-group">
              <label class="sr-only" for="birthDayInput">День</label>
              <input class="form-control mr-2"
                     id="birthDayInput"
                     type="number"
                     min="0"
                     placeholder="День"
                     v-model="birthDate.day">
            </div>

            <div class="input-group">
              <label class="sr-only" for="birthMonthInput">Месяц</label>
              <select class="form-control"
                      id="birthMonthInput"
                      v-model="birthDate.month">
                <option value="0" selected>Месяц</option>
                <option value="01">Январь</option>
                <option value="02">Февраль</option>
                <option value="03">Март</option>
                <option value="04">Апрель</option>
                <option value="05">Май</option>
                <option value="06">Июнь</option>
                <option value="07">Июль</option>
                <option value="08">Август</option>
                <option value="09">Сентябрь</option>
                <option value="10">Октябрь</option>
                <option value="11">Ноябрь</option>
                <option value="12">Декабрь</option>
              </select>
            </div>

            <div class="input-group">
              <label class="sr-only" for="birthYearInput">Год</label>
              <input class="form-control ml-2"
                     id="birthYearInput"
                     type="number"
                     min="1900"
                     placeholder="Год"
                     v-model="birthDate.year">
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="emailInput">E-mail</label>
          <input class="form-control"
                 id="emailInput"
                 type="email"
                 v-model="user.email">
        </div>

        <div class="form-group">
          <label for="passwordInput">Пароль</label>
          <input class="form-control"
                 id="passwordInput"
                 type="password"
                 v-model="user.password">
        </div>

        <div class="form-group">
          <label for="passwordConfirmationInput">Повторите пароль</label>
          <input class="form-control"
                 id="passwordConfirmationInput"
                 type="password"
                 v-model="passwordConfirmation">
        </div>
      </div>

      <div class="pt-3">
        <button class="btn btn-primary w-100"
                @click="registerUser">Зарегистрироваться
        </button>
      </div>
    </div>
  </main>
</template>

<script>
  import axios from "axios";

  export default {
    name: "SignUpComponent",
    data() {
      return {
        user: {
          email: "",
          firstName: "",
          middleName: "",
          password: "",
          secondName: ""
        },
        passwordConfirmation: "",
        birthDate: {
          day: null,
          month: 0,
          year: null
        }
      }
    },
    methods: {
      registerUser() {
        this.user.birthDate = `${this.birthDate.year}-${this.birthDate.month}-${this.birthDate.day}`
        axios.post(
          `${this.$store.state.globalUrl}/users/registration`,
          this.user
        ).then(response => this.$store.commit('changeResponse', response.data.message))
          .then(response => window.location = "/signup/finish")
      }
    }
  }
</script>
