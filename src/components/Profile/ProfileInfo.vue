<template>
  <div class="profile-info-container">
    <img :src="this.photo" alt="user profile photo">
    <div class="profile-text-container">
      <span class="profile-name">{{this.profile_name}}
        <i @click="isLike=!isLike" v-on:click="likeToogle" :class="{'red' : isLike}"/>
      </span>
      <br>
      <span class="profile-place">{{this.profile_place}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  props: {
    photo: String,
    profile_name: String,
    profile_place: String,
  },
  data() {
    return {
      isLike: false,
    };
  },
  methods: {
    likeToogle() {
      if (this.isLike) {
        this.$emit('like');
      } else {
        this.$emit('unlike');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .profile-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    margin-bottom: 25px;

    img {
      height: 70px;
      border-radius: 50%;
      margin-right: 18px;
      position: absolute;
      top: -50px;
    }

    .profile-text-container {
      text-align: center;
    }

    .profile-name {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0;
      color: $dark-blue;
      position: relative;
      display: inline-block;
      line-height: 22px;
      width: 100%;

      i {
        content: '';
        display: block;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: -20px;
        mask: url('../../assets/heart.svg') no-repeat center;
        mask-size: contain;
        height: 12px;
        width: 10.7px;
        background-color: $gray;
      }

      i.red {
        background-color: $red;
      }
    }

    .profile-place {
      font-size: 12px;
      color: #8298B9;
      letter-spacing: 0;
      line-height: 15px;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .profile-info-container {
      justify-content: left;
      margin-bottom: 20px;

      img {
        position: static;
      }

      .profile-text-container {
        text-align: left;
      }
    }
  }
</style>
