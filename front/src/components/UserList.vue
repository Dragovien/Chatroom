<template>
  <q-drawer
    side="left"
    show-if-above
    bordered
    :width="200"
    :breakpoint="500"
    class="left-panel bg-primary"
  >
    <h1 class="room-title">Liste des utilisateurs</h1>
    <q-scroll-area class="user-list">
      <div v-for="user in userList" :key="user" class="users">
        <p>{{ filterConnectedUsers(user.pseudo) }}</p>
      </div>
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
  methods: {
    changeTheme() {
      this.$q.dark.toggle();
    },

    filterConnectedUsers() {
      
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
    })
    
    
  }
});
</script>

<style scoped>

.user-list {
  height: 70vh;
}
.users {
  margin-left: 1em;
  color: rgb(255, 255, 255);
}

.room-title {
  font-size: 1.5em;
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
