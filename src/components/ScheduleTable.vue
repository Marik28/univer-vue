<template>
  <table class="table table-responsive table-bordered">
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
        <th v-for="(day, index) of $options.WeekDays" :key="index">
          <b> {{ day[0] }}</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="time of $options.LESSON_TIMES" :key="time">
        <td
          class="text-center"
          v-for="(lesson, idx) of filter_lessons_by(time)"
          :key="idx"
        >
          <template v-if="idx == 0">
            {{ time }}
          </template>
          <template v-else> {{ lesson }} </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { LESSON_TIMES, WeekDays } from "../models/enums.js";
export default {
  WeekDays: WeekDays,
  LESSON_TIMES: LESSON_TIMES,
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
  methods: {
    get_parity_from_number(number) {
      return {
        1: "числитель",
        2: "знаменатель",
      }[number];
    },
    // TODO сделать нормальный алгоритм
    filter_lessons_by(time) {
      const filteredLessons = this.lessons.filter(
        (lesson) => lesson.time == time
      );
      const daysNumbers = this.get_week_days_numbers();
      const lessonsToRender = [];
      for (let day of daysNumbers) {
        let foundLesson = filteredLessons.find((lesson) => lesson.day == day);
        if (foundLesson) {
          lessonsToRender.push(foundLesson.subject.name);
        } else {
          lessonsToRender.push("");
        }
      }
      return [null].concat(lessonsToRender);
    },
    find_lesson(time, day) {
      const lesson = this.lessons.find((lesson) => {
        return lesson.time == time && lesson.day == day;
      });
      if (lesson === undefined) {
        return "";
      }
      return `${lesson.subject.name}`;
    },
    get_week_days_numbers() {
      return Array.from(this.$options.WeekDays).map((item) => item[1]);
    },
  },
};
</script>
