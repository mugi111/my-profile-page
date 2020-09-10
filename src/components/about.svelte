<script>
  import AboutList from "./about-list";
  import TwitterIcon from "../assets/mg-twitter.jpg";
  import FacebookIcon from "../assets/h-t-facebook.jpg";
  import InstagramIcon from "../assets/h-t-instagram.jpg";
</script>

<style>
  .title-about {
    color: silver;
    font-size: 2em;
  }
  .profile-icon {
    height: 150px;
    width: 150px;
    margin: 25px;
    border-radius: 75px;
  }

  @media (max-width: 650px) {
    .profile-icon {
      height: 20vw;
      width: 20vw;
      margin: 3vw;
    }
  }
</style>

<h2 class="title-about">About</h2>
<div class="icon-list">
  <img
    class="twitter-icon profile-icon"
    alt="twitter-github-qiita"
    src={TwitterIcon} />
  <img class="facebook-icon profile-icon" alt="facebook" src={FacebookIcon} />
  <img
    class="instagram-icon profile-icon"
    alt="instagram"
    src={InstagramIcon} />
</div>
<AboutList />
