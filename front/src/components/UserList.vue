<template>
    <q-drawer
        side="left"
        show-if-above
        bordered
        :width="300"
        :breakpoint="500"
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'userList'
})
</script>

<style scoped>



</style>