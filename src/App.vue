<!-- TODO добавить сохранение уже имеющихся расписания и заданий -->
<!-- TODO сделать навигаю с vue-router -->
<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <header><navbar-component /></header>
  <main>
    <div class="container">
      <form class="mt-2">
        <div class="row col-3">
          <select
            @change="update_data"
            class="form-select"
            v-model="selected_group"
          >
            <option v-for="group of groups" :key="group.id">
              {{ group.name }}
            </option>
          </select>
        </div>
      </form>

      <hr />
      <div>
        <form>
          <div class="my-2" v-for="parity in Parity" :key="parity">
            <input
              @change="get_schedule"
              :checked="parity == Parity.NUMERATOR"
              class="mx-2"
              type="radio"
              :value="parity"
              :id="parity"
              v-model.number="selected_parity"
            />
            <label :for="parity">{{ get_parity_from_number(parity) }}</label>
          </div>
        </form>
      </div>
      <br />
      <br />
      <h3 class="text-center">
        Расписание группы {{ selected_group }} на
        {{ get_parity_from_number(selected_parity) }}
      </h3>
      <div v-if="has_lessons">
        <!-- TODO подумать, как исправить ref и нужно ли -->
        <schedule-table
          :parity="selected_parity"
          :group="selected_group"
          :lessons="lessons"
        />
      </div>
      <div class="text-center" v-else>Расписания нет</div>
      <h3 class="text-center">Задания для группы {{ selected_group }}</h3>
      <div v-if="has_assignments">
        <assignments-table :group="selected_group" :assignments="assignments" />
      </div>
      <div v-else>
        <p class="text-center">Заданий нет</p>
      </div>
      <h3 class="text-center">
        Полезные ссылки для группы {{ selected_group }}
      </h3>
      <useful-links-table
        v-if="has_subjects"
        :group="selected_group"
        :subjects="subjects"
      />
      <p class="text-center" v-else>Ссылок нет</p>
    </div>
  </main>
</template>

<script>
import "./models/schemas.js"
import {
  fetch_groups,
  fetch_schedule,
  fetch_assignments,
  fetch_subjects,
} from "./api/api.js";
import { Parity } from "./models/enums.js";
import ScheduleTable from "./components/ScheduleTable.vue";
import AssignmentsTable from "./components/AssignmentsTable.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import UsefulLinksTable from "./components/UsefulLinksTable.vue";

export default {
  name: "App",
  components: {
    ScheduleTable,
    AssignmentsTable,
    NavbarComponent,
    UsefulLinksTable,
  },
  data() {
    return {
      /**
       * @type {Array<Group>}
       */
      groups: [],
      /**
       * @type {?Group}
       */
      selected_group: null,
      /**
       * @type {Array<Lesson>}
       */
      lessons: [],
      /**
       * @type {Array<Assignment>}
       */
      assignments: [],
      /**
       * @type {Array<Subject>}
       */
      subjects: [],
      selected_parity: Parity.NUMERATOR,
      error_message: null,
      Parity: Parity,
    };
  },
  created: async function () {
    this.groups = await fetch_groups();
    if (this.groups.length > 0) {
      this.selected_group = this.groups[0].name;
      await this.update_data();
    }
  },
  methods: {
    // TODO подумать, как избежать повторения методов с дочерним компонентов

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
        this.lessons = await fetch_schedule(
          this.selected_group,
          3,
          this.selected_parity
        );
      } catch (err) {
        this.lessons = [];
        this.error_message = String(err);
      }
    },
    get_assignments: async function () {
      this.assignments = await fetch_assignments(this.selected_group);
    },

    get_subjects: async function () {
      this.subjects = await fetch_subjects(this.selected_group);
    },
    update_data: async function () {
      await this.get_schedule();
      await this.get_assignments();
      await this.get_subjects();
    },
  },
  computed: {
    // TODO придумать названия получше

    /**
     * @returns {Boolean}
     */
    has_assignments() {
      return this.assignments.length > 0;
    },
    /**
     * @returns {Boolean}
     */
    has_lessons() {
      return this.lessons.length > 0;
    },
    /**
     * @returns {Boolean}
     */
    has_subjects() {
      return this.subjects.length > 0;
    },
  },
};
</script>
