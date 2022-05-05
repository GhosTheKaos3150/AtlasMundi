<template>
  <q-page
    class="flex flex-center content-start row"
    style="background-color: #142044"
  >
    <div class="q-py-sm text-center col">
      <div class="q-py-sm text-center row" style="color: lightgray">
        <div class="q-py-sm text-center col">
          <div class="text-h6">Cidade-UF</div>
          <div class="text-p">
            <q-badge rounded color="green" align="middle" /> Visivel
          </div>
        </div>
      </div>
      <q-card
        flat
        square
        class="full-width inline justify-evenly row"
        style="height: 79vh; background-color: #142044"
      >
        <q-tabs
          class="full-width"
          inline-label
          v-model="tab"
          style="color: lightgray"
        >
          <q-tab class="fit" name="1" icon="mdi-earth" label="Mapa" />
          <q-tab class="fit" name="2" icon="mdi-forum" label="Chat"
            ><q-badge v-if="newMessages > 0" floating color="red" rounded />
          </q-tab>
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels
          animated
          v-model="tab"
          style="background-color: #142044; color: lightgray"
          class="fit"
        >
          <q-tab-panel name="1" class="fit" style="padding: 0px">
            <l-map
              ref="map"
              v-model:zoom="zoom"
              :center="[center['lat'], center['long']]"
              style="z-index: 0"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
            </l-map>
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
              <q-btn fab icon="mdi-pin" style="background-color: #11a3b9" />
            </q-page-sticky>
            <q-page-sticky position="bottom-left" :offset="[18, 18]">
              <q-btn
                fab
                padding="xs"
                icon="mdi-target"
                style="background-color: lightgray; color: #142044"
              />
            </q-page-sticky>
          </q-tab-panel>
          <q-tab-panel class="fit" style="padding: 0px" name="2">
            <q-list>
              <q-item
                v-for="user in chatUsers"
                :key="user"
                clickable
                @click="$router.push(`/chat/${user.userName}`)"
              >
                <q-item-section top avatar>
                  <q-avatar color="primary" text-color="white">
                    <q-img
                      v-if="user.profPic.length > 0"
                      :src="user.profPic"
                    ></q-img>
                    <div v-else>{{ user.name[0] }}</div>
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-left">
                  <q-item-label style="color: #11a3b9">{{
                    user.name
                  }}</q-item-label>
                  <q-item-label style="color: aliceblue" caption lines="2">{{
                    user.lastMsg
                  }}</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption style="color: aliceblue"
                    >5 min ago</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
  components: {
    LMap,
    LTileLayer,
  },
  name: "HomePage",
  data() {
    return {
      chatUsers: [
        {
          name: "Antonio M Dores",
          userName: "amdores",
          profPic:
            "https://i.pinimg.com/736x/d9/5a/28/d95a28bfa4e28bcfd64e27aaf43a06f9.jpg",
          lastMsg: "Eu: Macabro",
        },
        {
          name: "Dolores F Barriga",
          userName: "doloresfb",
          profPic: "",
          lastMsg: "PARA DE ZOAR MEU NOME",
        },
      ],
      newMessages: 0,
      tab: "1",

      zoom: 18,
      center: { lat: -3.768838365841603, long: -38.47866626878118 },
    };
  },
});
</script>
