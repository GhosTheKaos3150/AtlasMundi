<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar style="background: #11a3b9; color: lightgray">
        <q-btn flat round dense icon="mdi-arrow-left" @click="returnPage" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormLayout",

  methods: {
    returnPage() {
      this.$router.go(-1);
    },
  },
});
</script>
