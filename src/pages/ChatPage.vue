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
        class="q-px-xs q-py-xs"
        style="height: 9.5vh; background-color: #2d4665; overflow: hidden"
      >
        <!-- <q-scroll-area style="height: 8.5vh"> -->
        <q-input
          class="q-ma-sm q-px-sm q-py-xs"
          borderless
          autogrow
          autofocus
          maxlength="128"
          style="background-color: #c4c4c44f; border-radius: 32px"
          v-model="textModel"
          @keydown.enter.prevent="sendMsg"
        >
          <template v-slot:after>
            <q-btn
              round
              class="self-center"
              icon="mdi-send"
              size="18px"
              style="background-color: #0096ac; color: aliceblue"
              @click="sendMsg"
            ></q-btn>
          </template>
        </q-input>
        <!-- </q-scroll-area> -->
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
