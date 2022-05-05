<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar style="background: #11a3b9; color: lightgray">
        <q-btn flat round dense icon="mdi-arrow-left" @click="returnPage" />
        <q-toolbar-title>{{ name }}</q-toolbar-title>
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

  data() {
    return {
      name: "",
    };
  },
  mounted() {
    switch (this.$route.matched[0].path) {
      case "/signin":
        this.name = "Cadastro";
        break;
      case "/chat/:who":
        this.name = "Bate-Papo";
        break;
      case "/profileedit":
        this.name = "Editar Perfil";
        break;
      case "/pwdedit":
        this.name = "Editar Senha";
        break;
      default:
        this.name = "";
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
  },
});
</script>
