<script>
  import TwitterIcon from "../assets/twitter-logo.svg";
  import FacebookIcon from "../assets/facebook-logo.svg";
  import InstagramIcon from "../assets/instagram-logo.svg";
</script>

<div class="sns-icons">
  <img alt="twitter-logo" src={TwitterIcon} class="sns-icon" />
  <img alt="facebook-logo" src={FacebookIcon} class="sns-icon" />
  <img alt="instagram-logo" src={InstagramIcon} class="sns-icon" />
</div>

<style>
  .sns-icons {
    text-align: center;
  }

  .sns-icon {
    border-radius: 50%;
    padding: 3px;
    width: 30px;
  }
</style>
