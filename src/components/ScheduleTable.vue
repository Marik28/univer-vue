<template>
  <table class="table table-striped table-responsive table-bordered">
    <caption>
      Расписание группы
      {{
        group
      }}
      на
      {{
        get_parity_from_number(parity)
      }}
    </caption>
    <thead>
      <tr>
        <th>Время</th>
        <th v-for="(day, index) of WeekDays" :key="index">
          <b> {{ day[0] }}</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="time of LESSON_TIMES" :key="time">
        <td class="text-center" v-for="day of iter_days()" :key="day[1]">
          <template v-if="day[1] == 0">
            {{ time }}
          </template>
          <template v-else>
            {{ find_lesson(time, day[1]) }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { LESSON_TIMES, WeekDays } from "../models/enums.js";
export default {
  props: {
    group: {
      type: String,
      required: true,
    },
    parity: {
      type: Number,
      required: true,
    },
    lessons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      WeekDays: WeekDays,
      LESSON_TIMES: LESSON_TIMES,
    };
  },

  methods: {
    get_parity_from_number(number) {
      return {
        1: "числитель",
        2: "знаменатель",
      }[number];
    },
    iter_days() {
      return [["абуз", 0]].concat(Array.from(this.WeekDays));
    },
    find_lesson(time, day) {
      const lesson = this.lessons.find((lesson) => {
        return lesson.time == time && lesson.day == day;
      });
      if (lesson === undefined) {
        return "-";
      }
      return `${lesson.subject.name}`;
    },
  },
};
</script>
