<template>
  <q-page class="flex flex-center" style="background-color: #142044">
    <div class="fit q-pa-md">
      <div class="full-width justify-center row">
        <img
          alt="Atlas-Mundi logo"
          src="logo.png"
          style="width: 156px; height: 168px"
          class="q-mt-md"
        />
      </div>
      <div
        v-if="view == 0"
        class="fit q-pa-md q-my-md"
        style="max-width: 450px; margin-left: auto; margin-right: auto"
      >
        <div class="text-h5 flex flex-center row" style="color: lightgray">
          C A D A S T R O
        </div>
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
            label="Telefone"
            v-model="phone"
            type="tel"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-phone" />
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
      <div
        v-else-if="view == 1"
        class="fit q-pa-md q-my-md"
        style="max-width: 450px; margin-left: auto; margin-right: auto"
      >
        <div class="text-h5 flex flex-center row" style="color: lightgray">
          C A D A S T R O
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
            mask="##/##/####"
            :rules="['##/##/####']"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-calendar" />
            </template>
            <template v-slot:append>
              <q-icon name="mdi-calendar-search">
                <q-popup-proxy
                  ref="qDateProxy"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="date"
                    mask="DD/MM/YYYY"
                    :locale="dateLocale"
                    :options="getMaxDate"
                  >
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Fechar"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
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
            label="Confirme sua Senha"
            v-model="pwd_cfm"
            :type="pwd_field_type_c"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock-alert" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="
                  pwd_field_type_c == 'password' ? 'mdi-eye-off' : 'mdi-eye'
                "
                @click="
                  pwd_field_type_c == 'password'
                    ? (pwd_field_type_c = 'text')
                    : (pwd_field_type_c = 'password')
                "
              />
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
            :disable="!termos_concordo"
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
import { ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "SigninPage",

  setup() {
    const $q = useQuasar();

    return {
      showLoginError() {
        $q.notify({
          message: "Verifique seus dados e\ntente novamente",
          color: "red",
        });
      },
      showLoginSucess(user) {
        $q.notify({
          message: `Seja Bem vindo ${user}! :)\nFaça seu Login!`,
          color: "green",
        });
      },
    };
  },
  data() {
    return {
      user: "",
      alias: "",
      phone: "",
      email: "",
      cpf: "",
      date: ref(
        this.deltaDate(new Date(), 0, 0, -18).toLocaleDateString().slice(0, 10)
      ),
      maxDate: ref(
        this.deltaDate(new Date(), 0, 0, -18)
          .toISOString()
          .slice(0, 10)
          .split("-")
          .join("/")
      ),
      pwd: "",
      pwd_cfm: "",

      pwd_field_type: "password",
      pwd_field_type_c: "password",

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

      view: 0,

      dateLocale: {
        days: [
          "Domingo",
          "Segunda-feira",
          "Terça-feira",
          "Quarta-feira",
          "Quinta-feira",
          "Sexta-feira",
          "Sábado",
        ],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        months: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        monthsShort: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
      },
    };
  },
  methods: {
    prosseguir() {
      this.view += 1;
    },
    cadastrar() {
      this.createUser();
    },
    getMaxDate(date) {
      return date <= this.maxDate;
    },
    async createUser() {
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taxId: this.cpf,
          name: this.alias,
          login: this.user,
          password: this.pwd,
          birthDate: this.date + "T00:00:00.000-03:00",
          phoneNumber: this.phone,
        }),
      };

      var res = await fetch("/v1/profiles", options);

      if (res.status === 200) {
        this.showLoginSucess(this.alias.split(" ")[0]);
        this.$router.push("/");
      } else {
        this.showLoginError();
      }
    },
    deltaDate(input, days, months, years) {
      return new Date(
        input.getFullYear() + years,
        input.getMonth() + months,
        Math.min(
          input.getDate() + days,
          new Date(
            input.getFullYear() + years,
            input.getMonth() + months + 1,
            0
          ).getDate()
        )
      );
    },
  },
});
</script>
