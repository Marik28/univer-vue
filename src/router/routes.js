export default [
  {
    path: "/",
    name: "home",
    redirect: { name: "schedule" },
    meta: {
      title: "Главная",
    },
  },
  {
    path: "/schedule/",
    name: "schedule",
    component: () => import("../components/SchedulePage.vue"),
    meta: {
      title: "Расписание",
    },
  },
  {
    path: "/links/",
    name: "links",
    component: () => import("../components/UsefulLinksPage.vue"),
    meta: {
      title: "Ссылки",
    },
  },
  {
    path: "/assignments/",
    name: "assignments",
    component: () => import("../components/AssignmentsPage.vue"),
    meta: {
      title: "Задания",
    },
  },
];
