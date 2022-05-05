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
          label="Senha Atual"
          v-model="pwd"
          :type="pwd_field_type"
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
      <div class="row q-my-md">
        <q-input
          dark
          outlined
          round
          class="flex col"
          label="Nova Senha"
          v-model="new_pwd"
          :type="pwd_field_type_n"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="pwd_field_type_n == 'password' ? 'mdi-eye-off' : 'mdi-eye'"
              @click="
                pwd_field_type_n == 'password'
                  ? (pwd_field_type_n = 'text')
                  : (pwd_field_type_n = 'password')
              "
            />
          </template>
        </q-input>
      </div>
      <div class="row q-my-md">
        <q-input
          dark
          outlined
          round
          class="flex col"
          label="Confirme sua Senha"
          v-model="pwd_cfm"
          :type="pwd_field_type_c"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-lock-alert" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="pwd_field_type_c == 'password' ? 'mdi-eye-off' : 'mdi-eye'"
              @click="
                pwd_field_type_c == 'password'
                  ? (pwd_field_type_c = 'text')
                  : (pwd_field_type_c = 'password')
              "
            />
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
      pwd: "",
      new_pwd: "",
      pwd_cfm: "",

      pwd_field_type: "password",
      pwd_field_type_n: "password",
      pwd_field_type_c: "password",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>
