<template>
    <div class="card">
      <a-card title="Hickory Open" :bordered="false" style="width: 500px">
        <a-input style="margin-bottom: 10px" v-model:value="userNameValue" placeholder="Username" />
        <a-input style="margin-bottom: 20px" v-model:value="passWordValue" placeholder="Password" />
         <a-button v-on:click="greet" block>Login</a-button>
      </a-card>
    </div>
</template>

<script>

export default {
  name: "StartPage",
  data() {
    return {
      userNameValue: '',
      passWordValue: '',
    };
  },
  methods: {
    greet: function () {
      // `this` inside methods points to the Vue instance
      alert('Hello!')
      // `event` is the native DOM event
    }
  }
};
</script>

<style>
.card {
  display: flex;
  justify-content: center;
  background: #214023;
  padding: 60px 0 60px 0;
}

</style>
