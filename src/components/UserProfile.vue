<template>
  <div class="user-profile-container">
    <div class="profile-top"></div>
    <div class="content-wrapper">
      <Profile
        :photo="this.profile.photo"
        :profile_name="`${this.profile.first_name} ${this.profile.last_name}`"
        :profile_place="`${this.profile.city}, ${this.profile.country}`"
        :likes="this.profile.likes"
        :following="this.profile.following"
        :followers="this.profile.followers"
        @follow="onFollow"
        @unfollow="onUnfollow"
        @like="onLike"
        @unlike="onUnlike"
      />
      <CommentsList
       :comments_number="this.profile.comments.length"
       :comments="this.profile.comments"
       @addComment="onAddComment"
      />
    </div>
  </div>
</template>

<script>
import Profile from '../components/Profile/Profile.vue';
import CommentsList from '../components/Comments/CommentsList.vue';

export default {
  name: 'UserProfile',
  props: {
    user_profile: Object,
  },
  components: {
    Profile,
    CommentsList,
  },
  data() {
    return {
      profile: {
        first_name: '',
        last_name: '',
        photo: '',
        city: '',
        country: '',
        likes: 0,
        following: 0,
        followers: 0,
        comments: [],
      },
    };
  },
  mounted() {
    this.profile = this.user_profile;
    this.sortComments();
  },
  methods: {
    onAddComment(payload) {
      this.profile.comments.push(payload);
      this.sortComments();
    },

    onFollow() {
      this.profile.followers += 1;
    },

    onUnfollow() {
      this.profile.followers -= 1;
    },

    onLike() {
      this.profile.likes += 1;
    },

    onUnlike() {
      this.profile.likes -= 1;
    },

    sortComments() {
      this.profile.comments.sort((a, b) => {
        const x = a.timestamp;
        const y = b.timestamp;
        if (x < y) {
          return -1;
        }
        return x > y ? 1 : 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  .user-profile-container {
    width: 320px;
    background-color: $white;
    padding: 36px 20px 0 20px;
    height: 813px;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
    position: relative;
    box-sizing: border-box;
    margin-bottom: 100px;
  }

  .profile-top {
    width: 100%;
    height: 95px;
    border-radius: 5px 5px 0 0;
    background-color: $dark-blue;
    position: absolute;
    top: 0;
    left: 0;
  }

  .content-wrapper {
    width: 100%;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    .user-profile-container {
      width: 500px;
      height: 797px;
    }
  }
</style>
