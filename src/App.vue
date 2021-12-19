<!-- TODO: добавить сохранение уже имеющихся расписания и заданий -->
<!-- TODO: сделать навигацию с vue-router -->
<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <header><navbar-component /></header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-3"><sidebar-filter /></div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import SidebarFilter from "./components/SidebarFilter.vue";
export default {
  name: "App",
  components: {
    NavbarComponent,
    SidebarFilter,
  },
  data() {
    return {
      groups: [],
    };
  },
};
</script>
