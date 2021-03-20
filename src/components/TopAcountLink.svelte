<script>
  import TwitterIcon from "../assets/twitter-logo.svg";
  import FacebookIcon from "../assets/facebook-logo.svg";
  import InstagramIcon from "../assets/instagram-logo.svg";
  import GithubIcon from "../assets/github-logo.svg";
  import NpmIcon from "../assets/npm-logo.svg";
  export let twitterLink;
  export let facebookLink;
  export let instagramLink;
  export let githubLink;
  // export let qiitaLink;
  export let npmLink;
</script>

<div class="top-acount-link">
  <a href={twitterLink} target="_blank" class="acount-link">
    <img
      alt="twitter-logo-active"
      src={TwitterIcon}
      class="acount-icon round active"
    />
  </a>
  <a href={facebookLink} target="_blank" class="acount-link">
    <img
      alt="facebook-logo-active"
      src={FacebookIcon}
      class="acount-icon round active"
    />
  </a>
  <a href={instagramLink} target="_blank" class="acount-link">
    <img
      alt="instagram-logo-active"
      src={InstagramIcon}
      class="acount-icon round active"
    />
  </a>
  <a href={githubLink} target="_blank" class="acount-link">
    <img
      alt="github-logo-active"
      src={GithubIcon}
      class="acount-icon round active"
    />
  </a>
  <!-- <a
    href={qiitaLink}
    target="_blank"
    class="tech-link"
  >
    <img alt="qiita-logo" src={qiitaLink} class="tech-icon" />
    <img alt="qiita-logo-active" src={qiitaLink} class="tech-icon active" />
  </a> -->
  <a href={npmLink} target="_blank" class="acount-link">
    <img alt="npm-logo-active" src={NpmIcon} class="acount-icon active" />
  </a>
</div>

<style>
  .top-acount-link {
    text-align: right;
  }

  .round {
    border-radius: 50%;
  }

  .acount-link {
    width: 50px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 3px;
  }

  .acount-link .active {
    position: absolute;
    opacity: 1;
  }

  .acount-icon {
    width: inherit;
    background-color: white;
  }
</style>
