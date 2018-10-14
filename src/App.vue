<template>
  <div id="app">
    <UserProfile :user_profile="users_profiles[0]"/>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue';
import profiles from './data/profiles.json';

export default {
  name: 'app',
  data() {
    return {
      users_profiles: profiles,
    };
  },
  components: {
    UserProfile,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&subset=latin-ext');

* {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}

#app {
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 1000px;
}
</style>
