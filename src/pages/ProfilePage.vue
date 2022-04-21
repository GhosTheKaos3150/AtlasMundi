<template>
  <q-page
    class="flex flex-center content-start row"
    style="background-color: #142044"
  >
    <div>
      <q-avatar
        class="q-my-lg"
        size="200px"
        style="background-color: aliceblue; color: aliceblue"
      >
        <img
          class="q-pa-xs"
          src="https://www.rbautomotivo.com.br/wp-content/uploads/2020/10/img-revisao-celta-campinas-paulinia.jpg"
        />
      </q-avatar>
      <div class="text-center text-h5" style="color: aliceblue">
        {{ userName }}
      </div>
      <div class="text-center" style="color: aliceblue">{{ user }}</div>
    </div>

    <div class="q-px-md fit">
      <q-separator
        class="q-my-lg"
        style="background-color: aliceblue"
      ></q-separator>
      <q-item
        clickable
        v-ripple
        class="q-py-lg"
        style="color: aliceblue"
        @click="profileEdit"
      >
        <q-item-section class="text-h6"> Editar Perfil </q-item-section>

        <q-item-section avatar>
          <q-icon name="mdi-pen" />
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        class="q-py-lg"
        style="color: aliceblue"
        @click="senhaEdit"
      >
        <q-item-section class="text-h6"> Editar Senha </q-item-section>

        <q-item-section avatar>
          <q-icon name="mdi-pen" />
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        class="q-py-lg"
        style="color: aliceblue"
        @click="sair"
      >
        <q-item-section class="text-h6"> Sair </q-item-section>

        <q-item-section avatar>
          <q-icon name="mdi-logout" />
        </q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      userName: "Chevrolet S Ford",
      user: "@chevsford",
    };
  },
  methods: {
    profileEdit() {
      this.$router.push("/profileedit");
    },
    senhaEdit() {
      this.$router.push("/pwdedit");
    },
    sair() {
      this.$router.push("/");
    },
  },
});
</script>
