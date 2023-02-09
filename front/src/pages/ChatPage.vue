<template>
    <div>
      <UserList></UserList>
    </div>
    <div>
        <ChatRoom></ChatRoom>
    </div>
</template>

<script>
import ChatRoom from '../components/ChatRoom.vue';
import UserList from '../components/UserList.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
  components: {
    ChatRoom,
    UserList
  }
})

</script>

<style lang="scss" scoped>

</style>