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
      
    
        <div v-for="user in userList" :key="user" class="users">
        <p>{{ user }}</p>
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

export default defineComponent({
  name: "RoomList",
  data() {
    return {
      value: false,
      userList: [
        "Jean-Luc",
        "Julien-Baptiste",
        "Julien",
        "Marie",
        "Alice",
        "Mireille",
        "Jean-Luc",
        "Julien-Baptiste",
        "Julien",
        "Marie",
        "Alice",
        "Mireille",
        "Jean-Luc",
        "Julien-Baptiste",
        "Julien",
        "Marie",
        "Alice",
        "Mireille",
        "Jean-Luc",
        "Julien-Baptiste",
        "Julien",
        "Marie",
        "Alice",
        "Mireille",
      ],
    };
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
});
</script>

<style scoped>
.left-panel {
  background-color: var(--q-color-grey-100);
}

.user-list {
  height: 80vh;
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
