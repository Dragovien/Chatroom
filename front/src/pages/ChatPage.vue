<template>
    <div>
        <ChatRoom></ChatRoom>
    </div>
</template>

<script>
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