<template>
  <div class="profile-number-container">
    <span class="number">{{number}}</span>
    <br/>
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'ProfileNumber',
  props: {
    number: Number,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';

    .profile-number-container {
      height: 42px;
      margin-bottom: 15px;

      .number {
        font-size: 24px;
        color: $yellow;
        letter-spacing: 0;
        line-height: 24px;
      }

      .text {
        font-size: 10px;
        color: $dark-gray;
        letter-spacing: 0;
      }
    }

    @media screen and (min-width: 768px) {
      .profile-number-container {
        margin-bottom: 0;
      }
    }
</style>
