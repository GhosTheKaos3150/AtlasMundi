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
          :type="pwd_field_type"
          label="Senha"
          v-model="pwd"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="pwd_field_type == 'password' ? 'mdi-eye-off' : 'mdi-eye'"
              @click="
                pwd_field_type == 'password'
                  ? (pwd_field_type = 'text')
                  : (pwd_field_type = 'password')
              "
            />
          </template>
        </q-input>
      </div>
      <div class="row q-my-lg">
        <q-btn
          style="background: #11a3b9; color: lightgray"
          class="full-width"
          @click="sendToHome"
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
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      user: "",
      pwd: "",

      pwd_field_type: "password",
    };
  },
  setup() {
    const $q = useQuasar();

    return {
      showLoginError() {
        $q.notify({
          message: "Usuário/Senha Incorretos",
          color: "red",
        });
      },
    };
  },
  methods: {
    async sendToHome() {
      if (this.user.length >= 3 && this.pwd.length >= 8) {
        var options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: this.user.replace("@", ""),
            password: this.pwd,
          }),
        };

        if (process.env.DEV) {
          var res = await fetch("/login", options);
        } else {
          var res = { status: 404 };
        }

        if (res.status === 200) {
          var json = await res.json();
          localStorage.setItem("profileId", json["profileId"]);
          localStorage.setItem("authToken", json["token"]);
          this.$router.push("/home");
        } else {
          if (process.env.DEV) this.showLoginError();
          this.$router.push("/home");
        }
      } else {
        this.showLoginError();
      }
    },
    sendToSignin() {
      this.$router.push("/signin");
    },
  },
});
</script>
