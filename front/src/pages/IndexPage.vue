<template>
  <q-page class="flex flex-center">
    <div class="flex adjust">
      <div class="q-pa-md">
        <h1>Connexion à votre compte</h1>
      </div>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="pseudo"
          label="Your pseudo *"
          hint="Pseudonyme"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="password"
          label="Your password *"
          hint="password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Create a new account" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style>
.adjust {
  flex-direction: column;
}
</style>
