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
            <img
              src="https://www.rbautomotivo.com.br/wp-content/uploads/2020/10/img-revisao-celta-campinas-paulinia.jpg"
            />
          </q-avatar>
          <div class="text-h6 text-weight-bold">Chevrolet S Ford</div>
          <div class="text-p">@chevsford</div>
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
        <q-item clickable v-ripple class="q-py-lg">
          <q-item-section avatar>
            <q-icon name="mdi-account" />
          </q-item-section>

          <q-item-section class="text-h6"> Perfil </q-item-section>
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

          <q-item-section class="text-h6"> Sair </q-item-section>
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
      drawer: false,
    };
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
  },
});
</script>
