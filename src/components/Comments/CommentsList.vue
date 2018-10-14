<template>
  <div class="comments-container">
    <span class="comments-button" @click="commentsOpen = !commentsOpen">
      {{buttonText}}
    </span>
    <div class="comments" :class="{'hidden' : !commentsOpen}">
      <Comment
        v-for="(comment, index) in this.comments"
        v-bind:key="index" :photo="comment.photo"
        :author="comment.author" :timestamp="comment.timestamp"
        :comment="comment.comment"
      />
    </div>
    <div class="comment-form">
      <input @keyup.enter="addComment"  v-model="comment" type="text" placeholder="Add a comment">
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue';

export default {
  name: 'CommentsList',
  props: {
    comments_number: Number,
    comments: Array,
  },
  components: {
    Comment,
  },
  data() {
    return {
      commentsOpen: true,
      comment: '',
    };
  },
  computed: {
    buttonText() {
      if (this.commentsOpen) {
        return `Hide comments (${this.comments_number})`;
      }
      return `Show comments (${this.comments_number})`;
    },
  },
  methods: {
    addComment() {
      this.$emit('addComment', {
        timestamp: Date.now(),
        comment: this.comment,
        author: 'Mike Ross',
        photo: 'https://image.ibb.co/fg3wb9/harvey.png',
      });
      this.comment = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .comments-container {
    box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
    border-radius: 5px;
    padding: 25px 6px 0 0;
    text-align: center;
    padding-bottom: 20px;
  }

  .comments-button {
    font-size: 14px;
    color: $yellow;
    letter-spacing: 0;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 30px;
    display: inline-block;
  }

  .comments {
    height: 440px;
    overflow-y: scroll;
    margin-bottom: 30px;
    transition: height 0.5s ease-in
  }

  .comments::-webkit-scrollbar
  {
    width: 5px;
    background-color: rgba(216,216,216, 0.3);
    border-radius: 100px;
    opacity: 0.3;
    position: absolute;
  }

  .comments::-webkit-scrollbar-thumb
  {
    border-radius: 100px;
    background-color: rgba(0,44,113, 0.12)
  }

  .comment-form {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;

    input {
      width: 100%;
      font-size: 18px;
      color: $gray;
      letter-spacing: 0;
      border: none;
      box-sizing: border-box;
      outline: none;
      border-bottom: 2px solid #DBE0E8;
      padding-bottom: 5px;
      cursor: pointer;

      &::placeholder {
        color: $gray;
      }
    }
  }

  .comments.hidden {
    height: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    .comments-container {
      padding-bottom: 32px;
      text-align: left;
    }

    .comments-button {
      padding-left: 20px;
    }

    .comments {
      height: 470px;
      margin-bottom: 65px;
    }
  }
</style>

