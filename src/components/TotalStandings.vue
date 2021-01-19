<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
  </a-table>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    slots: { customRender: "name" }
  },
  {
    title: "Total Points",
    dataIndex: "points",
    key: "points",
    width: 80
  }
];

const data = [
  {
    key: "1",
    name: "Lukas Lindgren",
    points: 32
  },
  {
    key: "2",
    name: "Jim Green",
    points: 42
  },
  {
    key: "3",
    name: "Joe Black",
    points: 32
  }
];

export default {
  name: "TotalStandings",
  data() {
    return {
      data,
      columns
    };
  }
};
</script>

<style>
</style>
