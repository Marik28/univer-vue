<template>
  <h3 class="text-center">
    Расписание группы {{ group }} на
    {{ get_parity_from_number(group) }}
  </h3>
  <div v-if="has_lessons">
    <schedule-table
      :parity="selected_parity"
      :group="group"
      :lessons="lessons"
    />
  </div>
  <div class="text-center" v-else>Расписания нет</div>
</template>

<script>
import ScheduleTable from "./ScheduleTable.vue";
import { fetchSchedule } from "../api/api.js";
import { buildUrl } from "../api/api";

export default {
  components: {
    ScheduleTable,
  },
  data() {
    return {
      lessons: [],
    };
  },
  computed: {
    /**
     * @returns {Boolean}
     */
    has_lessons() {
      return this.lessons.length > 0;
    },
  },
  created() {
    console.log(
      buildUrl("/lessons/", { kek: "w", lul: null, day: 1, genres: [] })
    );
  },
  methods: {
    /**
     * @param {Number} number
     * @returns {String}
     */
    get_parity_from_number(number) {
      // TODO вот бы capitalize ...
      return {
        1: "числитель",
        2: "знаменатель",
      }[number];
    },
    get_schedule: async function () {
      try {
        this.lessons = await fetchSchedule(
          this.selected_group,
          3,
          this.selected_parity
        );
      } catch (err) {
        this.lessons = [];
        this.error_message = String(err);
      }
    },
  },
};
</script>
