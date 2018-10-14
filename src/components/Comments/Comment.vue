<template>
  <div class="comment-container">
    <div class="comment-header">
      <img :src="this.photo" alt="comment user photo">
      <span class="name">{{this.author}}</span>
      <span class="day">{{this.days}}d</span>
    </div>
    <p>
      {{this.comment}}
    </p>
  </div>
</template>

<script>
import Comment from './Comment.vue';

export default {
  name: 'Comment',
  props: {
    photo: String,
    author: String,
    timestamp: Number,
    comment: String,
  },
  components: {
    Comment,
  },
  computed: {
    days() {
      const dateDifference = Date.now() - this.timestamp;
      const DAY_IN_MILISECONDS = 86400000;
      return Math.round(dateDifference / DAY_IN_MILISECONDS);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .comment-container {
    padding-top: 20px;
    border-bottom: 1px solid $light-gray;
    position: relative;
  }

  .comment-container:last-of-type {
    border-bottom: none;
  }

  .comment-header {
    width: 100%;
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 40px;
      border-radius: 50%;
      padding-right: 11px;
      padding-left: 20px;
    }

    .name {
      font-size: 14px;
      color: $dark-blue;
      letter-spacing: 0;
      font-weight: 600;
    }

    .day {
      margin-left: auto;
      opacity: 0.5;
      font-size: 14px;
      color: $dark-blue;
      letter-spacing: 0;
      padding-right: 15px;
    }
  }

  p {
    text-align: left;
    padding-left: 71px;
    padding-right: 15px;
    max-width: 333px;
    padding-bottom: 20px;
    font-size: 14px;
    color: $light-black;
    letter-spacing: 0;
    line-height: 21px;
    word-wrap:break-word;
  }

</style>
