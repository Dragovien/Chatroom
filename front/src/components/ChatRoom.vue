<script>
import { defineComponent, ref } from "vue";
import socket from "src/utils/socket";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

export default defineComponent({
  name: "ChatRoom",
  data() {
    return {
      text: "",
      chatMessages: [],
    };
  },
  methods: {
    sendMsg() {
      console.log();
      socket.emit("messageSent", userStore.user, this.text);
      this.text = "";
    },

    isSender(id) {
      if (id === userStore.user.id) return true;
      return false;
    },

    getTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes}`;
    },

    changeTheme() {
      this.$q.dark.toggle();
    },

    // getDate() {
    //   const date = new Date();
    //   const day = date.getDay();
    //   const month = date.getMonth();
    //   const year = date.getFullYear();
    //   return `${day}/${month}/${year}`;
    // }
  },
  mounted() {
    this.chatMessages = socket.emit("getAllMessages");
    // socket.on("receiveAllMessages", (messages) => {
    //   this.chatMessages = messages;
    // })
    socket.on("sendAllMessages", (messages) => {
      this.chatMessages = messages;
    })
    socket.on("messageReceived", (messages) => {
      this.chatMessages = messages;
    });
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="q-pa-md row justify-center">
      <div v-if="chatMessages.length >= 1" class="message-area">
        <div v-for="(chatMessage, i) in chatMessages" :key="i">
          <q-chat-message
            :text="[chatMessage.message]"
            :name="chatMessage.sender.pseudo"
            :sent="isSender(chatMessage.sender.id)"
            :stamp="getTime()"
          />
        </div>
      </div>
    </div>
    <q-input rounded outlined v-model="text" class="textInput">
      <q-btn round flat @click="sendMsg" icon="send" />
    </q-input>
  </div>
</template>

<style scoped>

.message-area {
  border: 2px solid black;
  height: 70vh;
  width: 50vw;
  padding: 2em
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.textInput {
  position: absolute;
  bottom: 1em;
  width: 50vw;
}
</style>
