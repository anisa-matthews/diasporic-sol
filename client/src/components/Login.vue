<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  mounted() {
    this.getAdminLogin()
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.username == this.login.user && this.input.password == this.login.password) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "admin" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }

    async getAdminLogin() {
      const response = await LoginService.fetchAdminLogin()
      this.login = response.data
    }
  }
}

</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

</style>
