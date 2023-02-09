<template>
    <div>
        <ChatRoom></ChatRoom>
    </div>
</template>

<script>
<<<<<<< HEAD
  export default {
    name: 'ChatPage',
  }
</script>

<script setup>
=======
>>>>>>> dbb8ef4e83877f70a99bf323b3a6d8590fdcb67f
import ChatRoom from '../components/ChatRoom.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
  components: {
    ChatRoom,
  }
})

</script>

<style lang="scss" scoped>

</style>