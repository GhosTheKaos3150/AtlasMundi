<template>
  <q-page class="flex" style="background-color: #142044">
    <div
      class="full-width self-start"
      style="height: 85vh; background-color: #142044"
    >
      <div
        id="scrollArea"
        class="fit q-py-sm col q-px-md"
        style="overflow: auto"
      >
        <div v-for="msg in messages" :key="msg" class="q-py-sm">
          <q-chat-message
            v-if="msg.user === user"
            :text="[msg.msg]"
            sent
            class="text-left vertical-center"
          >
            <template v-slot:name
              ><div style="color: aliceblue">{{ user }}</div></template
            >
          </q-chat-message>
          <q-chat-message
            v-else
            :text="[msg.msg]"
            class="text-left vertical-center"
          >
            <template v-slot:name
              ><div style="color: aliceblue">{{ chatW.user }}</div></template
            >
          </q-chat-message>
        </div>
      </div>
      <div
        style="height: 9.5vh; background-color: #11a3b9; scroll-behavior: auto"
      >
        <q-scroll-area style="height: 9.5vh">
          <q-input
            class="q-mx-sm"
            borderless
            autogrow
            autofocus
            maxlength="128"
            style="height: 9vh"
            v-model="textModel"
            @keydown.enter.prevent="sendMsg"
          >
            <template v-slot:append>
              <q-icon
                class="self-start"
                name="mdi-send"
                style="height: 9vh"
                @click="sendMsg"
              ></q-icon>
            </template>
          </q-input>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      messages: [
        { msg: "Mensagem de Teste 1", user: "takedo" },
        { msg: "Mensagem de Teste 2", user: "abc" },
        { msg: "Mensagem de Teste 3", user: "takedo" },
        { msg: "Mensagem de Teste 4", user: "abc" },
        { msg: "Mensagem de Teste 5", user: "takedo" },
      ],
      user: "takedo",
      chatW: { user: "amdores", nome: "Antonio M Dores" },
      textModel: "",
    };
  },
  mounted() {
    this.chatW.user = this.$route.params.who;
  },
  methods: {
    sendMsg() {
      if (this.textModel != "") {
        this.messages.push({
          msg: this.textModel,
          user: this.user,
        });
      }
      this.textModel = "";

      var element = document.getElementById("scrollArea");
      element.scrollTop = element.scrollHeight;
    },
  },
});
</script>
