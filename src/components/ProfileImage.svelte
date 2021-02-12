<script lang="typescript">
  import TwitterAvatar from "../assets/mg-twitter.jpg";
  import FacebookAvatar from "../assets/h-t-facebook.jpg";
  import InstagramAvatar from "../assets/h-t-instagram.jpg";
  import { FACEBOOK, TWITTER } from "../types";
  export let type;
</script>

<div class="avatar">
  {#if type === TWITTER}
    <img src={TwitterAvatar} alt="mg-profile" class="avatar-img" />
  {:else if type === FACEBOOK}
    <img src={FacebookAvatar} alt="ht-facebook" class="avatar-img" />
  {:else}
    <img src={InstagramAvatar} alt="ht-instagram" class="avatar-img" />
  {/if}
</div>

<style>
  .avatar {
    text-align: center;
    margin: 20px;
  }

  .avatar-img {
    width: 80px;
    border-radius: 50%;
    transition: 0.3s;
  }
</style>
