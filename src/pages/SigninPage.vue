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
      <div v-if="!isTermos" class="absolute-center q-pa-md q-mt-xl">
        <div class="row q-my-md">
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
        <div class="row q-my-md">
          <q-input
            dark
            outlined
            round
            class="flex col"
            label="Apelido"
            v-model="alias"
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
            label="E-mail"
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
            label="CPF"
            v-model="cpf"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-card-account-details" />
            </template>
          </q-input>
        </div>
        <div class="row q-my-md">
          <q-input
            dark
            outlined
            round
            class="flex col"
            label="Nascimento"
            v-model="date"
            type="date"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-calendar" />
            </template>
          </q-input>
        </div>
        <div class="row q-my-md">
          <q-input
            dark
            outlined
            round
            class="flex col"
            label="Senha"
            v-model="pwd"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
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
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock-alert" />
            </template>
          </q-input>
        </div>
        <div class="row q-my-lg">
          <q-btn
            style="background: #11a3b9; color: lightgray"
            class="full-width"
            @click="prosseguir"
            >PROSSEGUIR</q-btn
          >
        </div>
      </div>
      <div v-else>
        <div class="row q-my-md">
          <q-input
            outlined
            round
            readonly
            autogrow
            class="flex col"
            label="Termos e Condições"
            v-model="termos"
            bg-color="white"
            style="max-height: 300px; overflow: auto"
          >
          </q-input>
        </div>
        <div>
          <q-checkbox
            right-label
            dark
            v-model="termos_concordo"
            label="Li e Concordo com os Termos e Condições de Uso"
            color="lightblue-1"
            style="color: lightgray"
          ></q-checkbox>
        </div>
        <div class="row q-my-lg">
          <q-btn
            style="background: #11a3b9; color: lightgray"
            class="full-width"
            @click="cadastrar"
            >Cadastrar</q-btn
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "SigninPage",
  data() {
    return {
      user: "",
      alias: "",
      email: "",
      cpf: "",
      date: new Date().toLocaleDateString(),
      pwd: "",
      pwd_cfm: "",
      termos_concordo: false,
      termos:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Fusce dapibus consectetur tellus, vel imperdiet arcu cursus quis. " +
        "Pellentesque hendrerit ac neque in laoreet." +
        " Donec pharetra dui elit, non ornare nibh ultricies non." +
        " Cras ac dictum nibh. Etiam eros ligula, lobortis ac nisl at, vestibulum dictum turpis." +
        " Vivamus risus ipsum, iaculis eu facilisis ultricies, ornare ac purus." +
        " In sodales maximus nulla, non eleifend velit vestibulum vel." +
        " Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." +
        " Suspendisse potenti. Pellentesque sollicitudin lobortis nulla, sed pretium turpis suscipit ut." +
        " Ut urna odio, convallis non dolor eget, sagittis vehicula sem." +
        " Nam et ligula eget quam ultricies efficitur. Mauris et tellus at enim dapibus sollicitudin." +
        " Curabitur eget elit aliquet, ullamcorper metus sit amet, suscipit augue. Sed scelerisque metus in ultricies maximus." +
        " Phasellus egestas urna mi, vel convallis lacus imperdiet eget. Maecenas in consectetur nulla, fermentum venenatis sapien." +
        " Integer sollicitudin eget felis vel ultrices. Sed felis turpis, dictum vitae accumsan vel, gravida eu tortor." +
        " Nam sollicitudin lorem ac nunc laoreet, a porta est pretium. Aenean nec elit ornare, ornare velit vitae, sagittis nunc." +
        " Nulla facilisi. Suspendisse sed ligula nulla. Vestibulum accumsan venenatis venenatis.",

      isTermos: false,
    };
  },
  methods: {
    prosseguir() {
      this.isTermos = true;
    },
    cadastrar() {
      this.$router.push("/");
    },
  },
});
</script>
