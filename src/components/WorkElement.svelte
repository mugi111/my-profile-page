<script>
  import workPage from "../assets/works-link.png";
  import workNpm from "../assets/works-npm.png";
  import workGithub from "../assets/works-github.png";

  export let image;
  export let name;
  export let description;
  export let techs;
  export let page;
  export let npm;
  export let github;
</script>

<div class="work-element-container">
  <div class="work-element-img-container">
    <img src={image} alt={`${name}-img`} class="work-element-img" />
  </div>
  <div class="work-element-desc">
    {description}
  </div>
  {#each techs as tech}
    <li class="work-element-tech">
      {tech}
    </li>
  {/each}
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
    display: inline-block;
    position: relative;
    vertical-align: top;
    padding: 15px;
    margin: 10px;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background: #ffffff;
    color: #000000;
  }

  .work-element-img-container {
    width: 100%;
    margin-bottom: 10px;
    height: fit-content;
    text-align: center;
  }

  .work-element-img {
    width: 120px;
  }

  .work-element-desc {
    margin-bottom: 5px;
  }

  .work-element-tech {
    list-style: none;
    font-size: 14px;
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
