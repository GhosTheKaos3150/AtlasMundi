<template>
  <q-page
    class="flex flex-center content-start row"
    style="background-color: #142044"
  >
    <div class="row q-my-xl">
      <img
        alt="Atlas-Mundi logo"
        src="logo.png"
        style="width: 143px; height: 144px"
        class="q-mt-md"
      />
    </div>
    <div class="fit q-mx-md">
      <div class="row q-my-md">
        <q-input
          dark
          outlined
          round
          class="flex col"
          label="Nome"
          v-model="name"
          type="text"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-account" />
          </template>
        </q-input>
      </div>
      <div class="row q-my-md">
        <q-input
          dark
          outlined
          round
          class="flex col"
          label="Usuário"
          v-model="user"
          type="text"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-account-outline" />
          </template>
        </q-input>
      </div>
      <div class="row q-my-md">
        <q-input
          dark
          outlined
          round
          class="flex col"
          label="E-Mail"
          v-model="email"
          type="email"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-at" />
          </template>
        </q-input>
      </div>
      <div class="row q-my-md">
        <q-input
          dark
          outlined
          round
          class="flex col"
          label="Telefone"
          v-model="phone"
          type="phone"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-phone" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="fit q-mx-xl">
      <div class="row q-my-lg">
        <q-btn
          style="background: #11a3b9; color: lightgray"
          class="full-width"
          @click="cadastrar"
          >Salvar</q-btn
        >
      </div>
      <div class="row q-my-lg">
        <q-btn
          flat
          style="background: transparent; color: lightgray"
          class="full-width"
          @click="goBack"
          >Cancelar</q-btn
        >
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      name: "",
      user: "",
      email: "",
      phone: "",
    };
  },
  mounted() {
    this.getProfileData();
  },
  methods: {
    async getProfileData() {
      var id = localStorage.getItem("profileId");
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      await fetch(`/v1/profiles/${id}`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.user = `@${json.login}`;
          this.name = `${json.name}`;
          this.email = `${json.email}`;
          this.phone = `${json.phoneNumber}`;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/");
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>
