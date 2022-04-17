<template>
  <q-page class="flex" style="background-color: #142044">
    <div
      class="full-width self-start"
      style="height: 85vh; background-color: #142044"
    >
      <div class="fit q-py-sm col q-px-md">
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
      <div style="height: 9.5vh; background-color: #11a3b9"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      messages: [
        { msg: "Isso", user: "chevsford" },
        { msg: "é", user: "abc" },
        { msg: "um", user: "chevsford" },
        { msg: "teste", user: "abc" },
        { msg: "macabro", user: "chevsford" },
      ],
      user: "chevsford",
      chatW: { user: "amdores", nome: "Antonio M Dores" },
    };
  },
  methods: {},
});
</script>
