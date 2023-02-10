<template>
  <q-page class="flex flex-center">
    <div class="flex adjust q-px-md">
      <div class="q-pa-md">
        <h1 class="main-title">Login</h1>
      </div>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="pseudo"
          label="Your pseudo *"
          hint="Pseudonyme"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="password"
          label="Your password *"
          hint="password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
        <div class="q-my-lg">
          <q-btn
            label="Create a new account"
            type="submit"
            color="primary"
            @click="toRegister"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import socket from "src/utils/socket";
import { useUserStore } from "../stores/user";
const store = useUserStore();

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      pseudo: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      socket.connect();
      socket.emit("login", {
        pseudo: this.pseudo,
        password: this.password,
      });
    },
    toRegister() {
      this.$router.push({ name: "RegisterPage" });
    },
  },
  mounted() {
    var router = this.$router;

    socket.on("checkedUser", (loggedUser) => {
      console.log(loggedUser)
      store.$patch({
        user: loggedUser,
      });
      router.push({ name: "ChatPage" });
    });
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
