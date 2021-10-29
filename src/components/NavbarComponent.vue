// TODO Придумать название получше

<template>
  <div class="bg-primary text-white py-2" v-if="show_top_description">
    <div class="container">
      <h1>Рофлан здарова</h1>
      <p>Тут будет какая-нибудь полезная инфа</p>
    </div>
  </div>
  <nav class="navbar bg-primary navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Сайтик</a>

      <!-- TODO сделать нормальный навбар -->
      <!-- <div class="navbar-nav-scroll">
        <ul class="navbar-nav nav">
          <li class="nav-item">
            <a href="#" class="nav-link">Расписание</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Задания</a>
          </li>
        </ul>
      </div> -->
    </div>
    <button
      @click.prevent="toggle_top_description"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarHeader"
      aria-controls="navbarHeader"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
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
