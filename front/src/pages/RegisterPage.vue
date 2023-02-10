<template>
  <q-page class="flex flex-center">
    <div class="flex adjust q-px-md">
      <div class="q-pa-md">
        <h1 class="main-title">Register</h1>
      </div>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input filled v-model="pseudo" label="Your pseudo *" hint="Pseudonyme" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" :error="!pseudoIsValid">
          <template v-slot:error>Username already in use !</template>
        </q-input>
        <q-input filled v-model="password" label="Your password *" hint="password" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />
        <q-input filled v-model="email" label="Your email *" hint="email address" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']" />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import socket from "src/utils/socket";

export default defineComponent({
  name: "RegisterPage",
  data() {
    return {
      pseudo: "",
      password: "",
      email: "",
      pseudoIsValid: true
    };
  },
  methods: {
    onSubmit() {
      socket.connect();
      socket.emit("register", ({
        id: self.crypto.randomUUID(),
        pseudo: this.pseudo,
        password: this.password,
        email: this.email,
      }), (res) => {
        if (res.status === "err") {
          console.log(res)
          this.pseudoIsValid = false;
        }
        else {
          this.$router.push({ name: "LoginPage" });
        }
        socket.disconnect();
      });
    },
  },
});
</script>

<style scoped>
.adjust {
  flex-direction: column;
  border: 2px solid black;
}

.main-title {
  font-size: 40px;
  text-align: center;
}
</style>
