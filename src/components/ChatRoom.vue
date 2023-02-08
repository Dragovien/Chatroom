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
<script setup>
import { onMounted } from 'vue';



function sendMsg() {
    console.log('message sent')
}

onMounted(() => {
    console.log('mounted')
})
</script>

<style lang="scss" scoped>
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