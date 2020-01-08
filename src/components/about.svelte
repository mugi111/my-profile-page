<script>
  import AboutList from "./about-list";
  import TwitterIcon from "../assets/mg-twitter.jpg";
  import FacebookIcon from "../assets/h-t-facebook.jpg";
  import InstagramIcon from "../assets/h-t-instagram.jpg";
</script>

<h2 class="title-about">About</h2>
<div class="icon-list">
  <img class="twitter-icon profile-icon" alt="twitter-github-qiita" src={TwitterIcon} />
  <img class="facebook-icon profile-icon" alt="facebook" src={FacebookIcon} />
  <img class="instagram-icon profile-icon" alt="instagram" src={InstagramIcon} />
</div>
<AboutList />

<style>
  .title-about {
    font-size: 2em;
    border-bottom: 3px dotted blue;
  }

  .profile-icon {
    height: 200px;
    width: 200px;
    margin: 5px;
  }
</style>