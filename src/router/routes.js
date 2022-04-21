const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/signin",
    component: () => import("layouts/FormLayout.vue"),
    children: [{ path: "", component: () => import("pages/SigninPage.vue") }],
  },

  {
    path: "/home",
    component: () => import("layouts/AppLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },

  {
    path: "/chat",
    component: () => import("layouts/FormLayout.vue"),
    children: [{ path: "", component: () => import("pages/ChatPage.vue") }],
  },

  {
    path: "/profile",
    component: () => import("layouts/AppLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProfilePage.vue") }],
  },

  {
    path: "/profileedit",
    component: () => import("layouts/FormLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ProfileEditPage.vue") },
    ],
  },

  {
    path: "/pwdedit",
    component: () => import("layouts/FormLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SenhaEditPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
