<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar style="background: #11a3b9; color: lightgray">
        <q-btn flat round dense icon="mdi-menu" @click="drawer = !drawer" />
        <q-toolbar-title>ATLAS MUNDI</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="700"
      elevated
      style="background-color: #142044"
    >
      <q-img
        class="absolute-top"
        style="height: 200px; background-color: #11a3b9"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="100px" class="q-mb-sm">
            <q-img ratio="1" :src="userPic" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">{{ userName }}</div>
          <div class="text-p">{{ user }}</div>
        </div>
      </q-img>

      <q-scroll-area
        style="
          color: lightgray;
          height: calc(100% - 200px);
          margin-top: 200px;
          border-right: 1px solid #142044;
        "
      >
        <q-item v-if="isHome" clickable v-ripple class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="mdi-account" />
          </q-item-section>

          <q-item-section class="text-h6" @click="perfil">
            Perfil
          </q-item-section>
        </q-item>
        <q-item v-else clickable v-ripple class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="mdi-home" />
          </q-item-section>

          <q-item-section class="text-h6" @click="home"> Home </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="mdi-cog" />
          </q-item-section>

          <q-item-section class="text-h6"> Configurações </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="mdi-logout" />
          </q-item-section>

          <q-item-section class="text-h6" @click="sair"> Sair </q-item-section>
        </q-item>
      </q-scroll-area>
    </q-drawer>

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
      user: "@takedo",
      userName: "Takamura",
      userPic:
        "http://bostonvoyager.com/wp-content/uploads/2017/11/personal_photo-233-1000x600.jpg",

      drawer: false,
      isHome: false,
    };
  },
  mounted() {
    this.isHome = this.$route.path == "/home";
  },
  methods: {
    sair() {
      this.$router.push("/");
      this.isHome = false;
    },
    perfil() {
      this.$router.push("/profile");
      this.isHome = false;
    },
    home() {
      this.$router.push("/home");
      this.isHome = true;
    },
  },
});
</script>
