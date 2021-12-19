<!-- TODO: Придумать название получше -->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >Главная</router-link
      >
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'schedule' }" class="nav-link active"
              >Расписание
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'assignments' }" class="nav-link active"
              >Задания
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'links' }" class="nav-link active"
              >Ссылки
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show_top_description: false,
    };
  },
  methods: {
    toggle_top_description() {
      this.show_top_description = !this.show_top_description;
    },
  },
};
</script>
