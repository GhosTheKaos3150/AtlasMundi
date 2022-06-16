<template>
  <q-page
    class="flex flex-center content-start row"
    style="background-color: #142044"
  >
    <div class="q-py-sm text-center col">
      <div class="q-py-sm text-center row" style="color: lightgray">
        <div class="q-py-sm text-center col">
          <div v-if="!locException" class="text-h6">{{ city }}-{{ uf }}</div>
          <div v-else class="text-h6">Procurando...</div>
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
              :options="options"
              ref="map"
              :zoom="zoom"
              :min-zoom="18"
              :max-zoom="18"
              v-model:center.sync="location"
              style="z-index: 0"
              zoom-animation
            >
              <l-tile-layer
                :url="url"
                layer-type="base"
                name="OpenStreetMap"
                :attribution="attribution"
              ></l-tile-layer>
              <l-marker :lat-lng="location">
                <l-icon :icon-anchor="dynamicAnchor" :icon-size="dynamicSize">
                  <q-avatar size="75px">
                    <q-img
                      alt="Minha Foto Emote Sorrindo"
                      ratio="1 "
                      :src="userPic"
                    />
                  </q-avatar>
                </l-icon>
              </l-marker>
              <!-- <div v-for="marker in markers" :key="marker"></div> -->
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
                @click="getLocation"
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
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  name: "HomePage",
  data() {
    return {
      location: [0, 0],
      locError: null,
      locException: true,
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>',
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
      options: {
        zoomControl: false,
        dragging: false,
      },
      markers: [
        // {lat_long: []}
      ],
      users: {},
      userPic:
        "http://bostonvoyager.com/wp-content/uploads/2017/11/personal_photo-233-1000x600.jpg",
      iconSize: 50,
      iconSizeText: "50px",
      city: "CIDADE",
      uf: "UF",
    };
  },
  created() {
    this.getLocation();
  },
  mounted() {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.getLocation();
      }, 1000);
    });
    this.getProfileData();
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
  methods: {
    getProfileData() {
      var id = localStorage.getItem("profileId");
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      fetch(`/v1/profiles/${id}`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/");
        });
    },
    async getLocation() {
      if (!("geolocation" in navigator)) {
        this.locError = "Geolocation is not available.";
        return;
      }
      var error = false;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.location = [pos.coords.latitude, pos.coords.longitude];
        },
        (err) => {
          this.locError = err.message;
          error = true;
        }
      );

      if (!error) {
        await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.location[0]}&lon=${this.location[1]}`
        )
          .then((res) => {
            this.locException = false;
            return res.json();
          })
          .then((json) => {
            this.city = json.address.town;
            this.uf = json.address.state.substr(0, 2).toUpperCase();
            this.locException = false;
          })
          .catch((err) => {
            this.locException = true;
          });
      }
    },
  },
});
</script>
