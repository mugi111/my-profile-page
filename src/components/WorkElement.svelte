<script>
  import workPage from "../assets/works-link.png";
  import workNpm from "../assets/works-npm.png";
  import workGithub from "../assets/works-github.png";

  export let image;
  export let name;
  export let description;
  export let page;
  export let npm;
  export let github;
</script>

<div class="work-element-container">
  <div class="work-element-img-container">
    <img src={image} alt={`${name}-img`} class="work-element-img" />
  </div>
  <span class="work-element-name">
    {name}
  </span>
  <span class="work-element-desc">
    {description}
  </span>
  <div class="work-element-link">
    {#if page != null}
      <a href={page}>
        <img src={workPage} alt="page" class="link-icon" />
      </a>
    {/if}
    {#if npm != null}
      <a href={npm}>
        <img src={workNpm} alt="npm" class="link-icon" />
      </a>
    {/if}
    {#if github != null}
      <a href={github}>
        <img src={workGithub} alt="github" class="link-icon" />
      </a>
    {/if}
  </div>
</div>

<style>
  .work-element-container {
    display: block;
    position: relative;
    padding: 15px;
    margin: 10px;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 10px #a6a6a6, -5px -5px 10px #ffffff;
  }

  .work-element-img-container {
    width: 100%;
    height: fit-content;
    text-align: center;
  }

  .work-element-img {
    width: 120px;
  }

  .work-element-link {
    width: fit-content;
    height: fit-content;
    margin: 10px;
    bottom: 0px;
    right: 0px;
    position: absolute;
  }

  .link-icon {
    width: 30px;
    margin: 5px;
    vertical-align: middle;
  }
</style>
