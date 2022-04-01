<template>
  <q-page class="flex flex-center" style="background-color: #142044">
    <div class="q-pa-md">
      <div class="row q-mt-xl absolute-top">
        <img
          alt="Atlas-Mundi logo"
          src="logo.png"
          style="width: 156px; height: 168px"
          class="q-mt-xl absolute-center"
        />
      </div>
      <div class="text-h5 flex flex-center row" style="color: lightgray">
        L O G I N
      </div>
      <div class="row q-my-lg">
        <q-input
          dark
          outlined
          round
          class="flex col"
          prefix="@"
          label="Usuário"
          v-model="user"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-account" />
          </template>
        </q-input>
      </div>
      <div class="row">
        <q-input
          dark
          outlined
          round
          class="flex col"
          type="password"
          label="Senha"
          v-model="pwd"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-lock" />
          </template>
        </q-input>
      </div>
      <div class="row q-my-lg">
        <q-btn style="background: #11a3b9; color: lightgray" class="full-width"
          >Entrar</q-btn
        >
      </div>
      <div class="flex justify-center" style="color: lightgray">
        Ainda não possui uma conta?
      </div>
      <a
        class="flex justify-center"
        style="color: lightskyblue"
        @click="sendToSignin"
        >Cadastre-se!</a
      >
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      user: "",
      pwd: "",
    };
  },
  methods: {
    sendToSignin() {
      this.$router.push("/signin");
    },
  },
});
</script>
