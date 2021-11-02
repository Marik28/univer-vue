<template>
  <table class="table table-responsive table-bordered">
    <caption>
      Полезные ссылки для группы
      {{
        group
      }}
    </caption>
    <thead>
      <tr>
        <th>Предмет</th>
        <th>Описание</th>
        <th>Ссылка</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(subject, s_index) of subjects" :key="s_index">
        <tr v-for="(link, l_index) of subject.useful_links" :key="l_index">
          <td>{{ subject.name }}</td>
          <td>{{ link.description }}</td>
          <td><a :href="link.link" target="blank"> Ссылка </a></td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    group: {
      type: String,
      requiered: true,
    },
    subjects: {
      type: Array,
      requiered: true,
    },
  },
};
</script>
