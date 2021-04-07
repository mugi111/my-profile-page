<script>
  import TwitterIcon from "../assets/twitter-logo.svg";
  import TwitterIconGrey from "../assets/twitter-logo-grey.svg";
  import FacebookIcon from "../assets/facebook-logo.svg";
  import FacebookIconGrey from "../assets/facebook-logo-grey.svg";
  import InstagramIcon from "../assets/instagram-logo.svg";
  import InstagramIconGrey from "../assets/instagram-logo-grey.svg";
  import {
    snsHoverSetFacebook,
    snsHoverSetInstagram,
    snsHoverSetTwitter,
  } from "../stores";

  import GithubIcon from "../assets/github-logo.svg";
  import GithubIconGrey from "../assets/github-logo-grey.svg";
  import NpmIcon from "../assets/npm-logo.svg";
  import NpmIconGrey from "../assets/npm-logo-grey.svg";
  export let twitterLink;
  export let facebookLink;
  export let instagramLink;
  export let githubLink;
  // export let qiitaLink;
  export let npmLink;
</script>

<div class="icons">
  <a
    href={twitterLink}
    target="_blank"
    on:mouseover={snsHoverSetTwitter}
    on:mouseout={snsHoverSetTwitter}
    class="link"
  >
    <img alt="twitter-logo" src={TwitterIconGrey} class="icon" />
    <img alt="twitter-logo-active" src={TwitterIcon} class="icon active" />
  </a>
  <a
    href={facebookLink}
    target="_blank"
    on:mouseover={snsHoverSetFacebook}
    on:mouseout={snsHoverSetTwitter}
    class="link"
  >
    <img alt="facebook-logo" src={FacebookIconGrey} class="icon" />
    <img alt="facebook-logo-active" src={FacebookIcon} class="icon active" />
  </a>
  <a
    href={instagramLink}
    target="_blank"
    on:mouseover={snsHoverSetInstagram}
    on:mouseout={snsHoverSetTwitter}
    class="link"
  >
    <img alt="instagram-logo" src={InstagramIconGrey} class="icon" />
    <img alt="instagram-logo-active" src={InstagramIcon} class="icon active" />
  </a>
  <a href={githubLink} target="_blank" class="link">
    <img alt="github-logo" src={GithubIconGrey} class="icon github" />
    <img alt="github-logo-active" src={GithubIcon} class="icon github active" />
  </a>
  <!-- <a
    href={qiitaLink}
    target="_blank"
    class="tech-link"
  >
    <img alt="qiita-logo" src={qiitaLink} class="tech-icon" />
    <img alt="qiita-logo-active" src={qiitaLink} class="tech-icon active" />
  </a> -->
  <a href={npmLink} target="_blank" class="link">
    <img alt="npm-logo" src={NpmIconGrey} class="icon" />
    <img alt="npm-logo-active" src={NpmIcon} class="icon active" />
  </a>
</div>

<style>
  .icons {
    text-align: center;
    cursor: default;
  }

  .icon {
    width: 24px;
    background-color: white;
  }

  .github {
    border-radius: 50%;
  }

  .link {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 3px;
  }

  .link .active {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.3s;
  }

  .link:hover .active {
    opacity: 1;
  }
</style>
