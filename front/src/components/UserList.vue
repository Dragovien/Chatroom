<template>
  <q-drawer
    side="left"
    show-if-above
    bordered
    :width="300"
    :breakpoint="500"
    class="left-panel bg-primary"
  >
    <h1 class="room-title">Liste des utilisateurs</h1>
    <q-scroll-area class="user-list">
      <h2 class="room-title">Utilisateurs connectés</h2>
      <ul v-for="user in filteredUsers.connectedUsers" :key="user" class="users">
        <li>{{user.pseudo}}</li>
      </ul>
    </q-scroll-area>
    <q-scroll-area class="user-list">
      <h2 class="room-title">Utilisateurs déconnectés</h2>
      <ul v-for="user in filteredUsers.disconnectedUsers" :key="user" class="users">
        <li>{{user.pseudo}}</li>
      </ul>
    </q-scroll-area>
    <div class="q-pa-sm toggle-btn">
      <q-toggle
        class="toggle-label"
        @click="changeTheme()"
        v-model="value"
        checked-icon="check"
        color="red"
        label="Dark mode"
        unchecked-icon="clear"
      >
      </q-toggle>
    </div>
  </q-drawer>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { watch } from "vue";
import socket from "src/utils/socket";


export default defineComponent({
  name: "RoomList",
  data() {
    return {
      value: false,
      userList: [],
    };
  },
  computed: {
    filteredUsers() {
      let connectedUsers = [];
      let disconnectedUsers= [];
      this.userList.forEach((user) => {
        if (user.socketId) {
          connectedUsers.push(user);
        } else {
          disconnectUser.push(user);
        } 
      });
      return {connectedUsers, disconnectedUsers};
    },
  },
  methods: {
    changeTheme() {
      this.$q.dark.toggle();
    },
  },
  setup() {
    const $q = useQuasar();

    watch(
      () => $q.dark.isActive,
      (val) => {
        const drawer = document.querySelector(".left-panel");
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
          drawer.classList.remove("bg-primary");
          drawer.classList.add("bg-grey-7");
        } else {
          drawer.classList.remove("bg-grey-7");
          drawer.classList.add("bg-primary");
        }
      }
    );
  },
  mounted() {
    socket.emit("userList");

    socket.on("sendUserList", (allUsers) => {
      this.userList = allUsers.registeredUsers;
    });

    console.log(this.filteredUsers);
  },
});
</script>

<style scoped>

/* .left-panel {
  display: flex;
  flex-wrap: wrap;
} */
.user-list {
  height: 35vh;
}
.users {
  margin-left: 1em;
  color: rgb(255, 255, 255);
}

.room-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  color: white;
  text-align: center;
}

.toggle-btn {
  position: fixed;
  bottom: 0;
  margin: auto;
}

.toggle-label {
  color: white;
}
</style>
