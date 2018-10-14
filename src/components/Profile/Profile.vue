<template>
  <div class="profile-container">
    <div @click="modalOpen=true" class="share-button"></div>
    <div class="modal" :class="{'hidden' : !modalOpen}">
      <a href="">{{getUrl()}}</a>
      <div @click="modalOpen=!modalOpen" class="close"></div>
    </div>
    <ProfileInfo
      :profile_name="this.profile_name"
      :profile_place="this.profile_place"
      :photo="this.photo"
      @like="onLike"
      @unlike="onUnlike"
    />
    <div class="numbers-container">
      <ProfileNumber :number="this.likes" text="Likes"/>
      <div class="divider"></div>
      <ProfileNumber :number="this.following" text="Following"/>
      <div class="divider"></div>
      <ProfileNumber :number="this.followers" text="Followers"/>
      <button
        @click="isFollowing=!isFollowing"
        v-on:click="this.followToogle">{{this.getButtonText}}
      </button>
    </div>
  </div>
</template>

<script>
import ProfileInfo from './ProfileInfo.vue';
import ProfileNumber from './ProfileNumber.vue';

export default {
  name: 'Profile',
  props: {
    photo: String,
    profile_name: String,
    profile_place: String,
    likes: Number,
    following: Number,
    followers: Number,
  },
  data() {
    return {
      modalOpen: false,
      isFollowing: false,
    };
  },
  components: {
    ProfileInfo,
    ProfileNumber,
  },
  computed: {
    getButtonText() {
      if (this.isFollowing) {
        return 'unfollow';
      }
      return 'follow';
    },
  },
  methods: {
    getUrl() {
      return document.location.href;
    },

    followToogle() {
      if (this.isFollowing) {
        this.$emit('follow');
      } else {
        this.$emit('unfollow');
      }
    },

    onLike() {
      this.$emit('like');
    },

    onUnlike() {
      this.$emit('unlike');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .profile-container {
    width: 100%;
    box-sizing: border-box;
    background-color: $white;
    box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
    border-radius: 5px;
    padding: 20px 20px 0 20px;
    margin-bottom: 15px;
  }

  .share-button {
    height: 10.1px;
    width: 10.1px;
    position: absolute;
    top: 11.9px;
    right: 11.9px;
    background-color: $yellow;
    mask: url('../../assets/share-symbol.svg') no-repeat center;
    mask-size: contain;
  }

  .numbers-container {
    display:flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding-bottom: 15px;
  }

  button {
    display: block;
    background: $yellow;
    border-radius: 100px;
    border: 0;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    color: $white;
    font-weight: 600;
    letter-spacing: 4.2px;
    height: 46px;
    line-height: 46px;
    min-width: 100%;
    text-transform: uppercase;
  }

  .divider {
    width: 1px;
    height: 38px;
    background-color: #979797;
    opacity: 0.1;
  }

  .modal {
    position: absolute;
    z-index: 1;
    left: calc(50% - 140px);
    top: 0;
    box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    width: 280px;
    height: 200px;
    transform: scale(1);
    transition: 0.3s ease-in;
    background-color: $white;

    a {
      font-size: 14px;
      color: $yellow;
    }

    .close {
      height: 10px;
      width: 10px;
      background-color: $yellow;
      mask: url('../../assets/close.svg') no-repeat center;
      mask-size: contain;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  .modal.hidden {
    transform: scale(0);
  }

  @media screen and (min-width: 768px) {
    .profile-container {
      margin-bottom: 10px;
    }

    .numbers-container {
      padding-bottom: 30px;
    }

    button {
      min-width: 134px;
    }

    .modal {
      width: 460px;
      left: calc(50% - 230px);
    }
  }
</style>

