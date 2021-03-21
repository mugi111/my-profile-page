<script lang="typescript">
  import TwitterAvatar from "../assets/mg-twitter.png";
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
