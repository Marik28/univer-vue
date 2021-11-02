<template>
  <!-- TODO оптимизировать построение таблицы -->
  <table class="table table-striped table-responsive table-bordered">
    <caption>
      Задания для группы
      {{
        group
      }}
    </caption>
    <thead>
      <tr>
        <th>#</th>
        <th>Предмет</th>
        <th>Задание</th>
        <th>Описание</th>
        <th>Выполнить до</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(assignment, index) of assignments" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ assignment.subject.name }}</td>
        <td>{{ assignment.title }}</td>
        <td>
          {{ assignment.description ? assignment.description : "-" }}
        </td>
        <td>{{ assignment.complete_before }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    assignments: {
      type: Array,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
  },
};
</script>
