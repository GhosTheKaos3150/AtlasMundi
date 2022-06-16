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
        <q-img ratio="1" :src="userPic" />
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
      user: "@tekedo",
      userName: "Takamura",
      userPic:
        "http://bostonvoyager.com/wp-content/uploads/2017/11/personal_photo-233-1000x600.jpg",
    };
  },
  async mounted() {
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
          this.userName = `${json.name}`;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/");
        });
    },
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
