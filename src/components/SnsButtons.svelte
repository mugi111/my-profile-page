<script>
  import TwitterIcon from "../assets/twitter-logo.svg";
  import TwitterIconGrey from "../assets/twitter-logo-grey.svg";
  import FacebookIcon from "../assets/facebook-logo.svg";
  import FacebookIconGrey from "../assets/facebook-logo-grey.svg";
  import InstagramIcon from "../assets/instagram-logo.svg";
  import InstagramIconGrey from "../assets/instagram-logo-grey.svg";
  export let twitterLink;
  export let facebookLink;
  export let instagramLink;
</script>

<div class="sns-icons">
  <a href={twitterLink} target="_blank" class="sns-link">
    <img alt="twitter-logo" src={TwitterIconGrey} class="sns-icon" />
    <img alt="twitter-logo-active" src={TwitterIcon} class="sns-icon active" />
  </a>
  <a href={facebookLink} target="_blank" class="sns-link">
    <img alt="facebook-logo" src={FacebookIconGrey} class="sns-icon" />
    <img
      alt="facebook-logo-active"
      src={FacebookIcon}
      class="sns-icon active"
    />
  </a>
  <a href={instagramLink} target="_blank" class="sns-link">
    <img alt="instagram-logo" src={InstagramIconGrey} class="sns-icon" />
    <img
      alt="instagram-logo-active"
      src={InstagramIcon}
      class="sns-icon active"
    />
  </a>
</div>

<style>
  .sns-icons {
    text-align: center;
    cursor: default;
  }

  .sns-icon {
    border-radius: 50%;
    width: 30px;
  }

  .sns-link {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 3px;
  }

  .sns-link .active {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.5s;
  }

  .sns-link:hover .active {
    opacity: 1;
  }
</style>
