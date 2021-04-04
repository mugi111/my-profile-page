<script lang="typescript">
  import TwitterAvatar from "../assets/mg-twitter.png";
  import FacebookAvatar from "../assets/h-t-facebook.jpg";
  import InstagramAvatar from "../assets/h-t-instagram.jpg";
  import { FACEBOOK, TWITTER } from "../types";
  export let type;
  let imageSrc = TwitterAvatar;
</script>

<div class="avatar">
  <img src={imageSrc} alt="profile" class="avatar-img" />
</div>

<style>
  .avatar {
    text-align: center;
    margin: 20px;
  }

  .avatar-img {
    width: 80px;
    border-radius: 50%;
  }
</style>
