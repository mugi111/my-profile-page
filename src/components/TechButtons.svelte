<script>
  import GithubIcon from "../assets/github-logo.svg";
  import GithubIconGrey from "../assets/github-logo-grey.svg";
  import NpmIcon from "../assets/npm-logo.svg";
  import NpmIconGrey from "../assets/npm-logo-grey.svg";
  export let githubLink;
  // export let qiitaLink;
  export let npmLink;
</script>

<div class="tech-icons">
  <a href={githubLink} target="_blank" class="tech-link">
    <img alt="github-logo" src={GithubIconGrey} class="tech-icon" />
    <img alt="github-logo-active" src={GithubIcon} class="tech-icon active" />
  </a>
  <!-- <a
    href={qiitaLink}
    target="_blank"
    class="tech-link"
  >
    <img alt="qiita-logo" src={qiitaLink} class="tech-icon" />
    <img alt="qiita-logo-active" src={qiitaLink} class="tech-icon active" />
  </a> -->
  <a href={npmLink} target="_blank" class="tech-link">
    <img alt="npm-logo" src={NpmIconGrey} class="tech-icon" />
    <img alt="npm-logo-active" src={NpmIcon} class="tech-icon active" />
  </a>
</div>

<style>
  .tech-icons {
    text-align: center;
    cursor: default;
  }

  .tech-icon {
    width: 30px;
  }

  .tech-link {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 3px;
  }

  .tech-link .active {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.3s;
  }

  .tech-link:hover .active {
    opacity: 1;
  }
</style>
