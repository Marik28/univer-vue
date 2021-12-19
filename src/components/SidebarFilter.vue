<template>
  <select v-model="selectedGroup" class="form-select">
    <option v-for="group of groups" :key="group.id">
      {{ group.name }}
    </option>
  </select>
</template>
<script>
import "../models/schemas.js";
export default {
  data() {
    return {
      /**
       * @type {Array<Group>}
       */
      groups: [
        { id: 1, name: "kek" },
        { id: 2, name: "kekw" },
      ],
      selectedGroup: null,
    };
  },
  created() {},
};
</script>
