<script>
import { defineComponent, ref } from "vue";
import socket from "src/utils/socket";

export default defineComponent({
  name: "ChatRoom",
  data() {
    return {
      text: "",
      chatMessages: [""],
    };
  },
  methods: {
    sendMsg() {
      socket.emit("message", text.value);
      text.value = "";
    }
  },
  mounted() {
    socket.on("messageReceived", (data) => {
      console.log(data);
    });
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <!-- <q-chat-message
        v-for="message in chatMessages.values"
        :text="message"
      /> -->
      </div>
    </div>
    <q-input rounded outlined v-model="text" class="textInput">
      <q-btn round flat @click="sendMsg" icon="send" />
    </q-input>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  width: 25vw;
}

.textInput {
  position: absolute;
  bottom: 0;
  width: 25vw;
}
</style>
