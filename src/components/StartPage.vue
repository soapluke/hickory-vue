<template>
  <div class="grid-container">
    <div class="total-points">
      <div class="card">
        <a-card title="Hickory Open Total Standing" :bordered="false" style="width: 400px">
          <TotalStandings />
        </a-card>
      </div>
    </div>
    <div class="tournament-results">
      <div class="card">
        <a-card title="Hickory Open Past Results" :bordered="false" style="width: 400px">
          <p>Here you will see all past tournament results</p>
        </a-card>
      </div>
      <TournamentCard />
      <a-button class="add-button" size="large">Add Results</a-button>
    </div>
  </div>
</template>

<script>
import TotalStandings from "./TotalStandings";
import TournamentCard from "./TournamentCard";
export default {
  name: "StartPageView",
  components: {
    TotalStandings,
    TournamentCard
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 0fr 1fr 1fr 0fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". total-points tournament-results .";
}

.total-points {
  grid-area: total-points;
}

.tournament-results {
  grid-area: tournament-results;
}

.add-button {
  float: left;
  margin-top: 10px;
}
</style>
