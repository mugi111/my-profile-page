<script>
  import WorkElement from "./WorkElement.svelte";
  import workPortfolio from "../assets/works-portfolio.png";
  import workReactGhRepos from "../assets/works-react-gh-repos.png";
  import workJsonWebApp from "../assets/works-json-formatter.png";
</script>

<h2>Work</h2>
<div class="works">
  <WorkElement
    image={workPortfolio}
    name="portfolio"
    description="ポートフォリオ"
    techs={["Javascript", "Svelte", "Sapper"]}
    page="https://portfolio.mugi.cat/"
    github="https://github.com/mugi111/my-profile-page/"
  />
  <WorkElement
    image={workReactGhRepos}
    name="react-gh-repos"
    description="
  Githubのピン留めみたいなReactコンポーネント"
    techs={["React", "Typescript"]}
    page="https://mugi111.github.io/react-github-repos/"
    github="https://github.com/mugi111/react-github-repos"
    npm="https://www.npmjs.com/package/react-github-repos"
  />
  <WorkElement
    image={workJsonWebApp}
    name="jsonformatter"
    description="JSON生成するWebApp"
    techs={["React", "Recoil", "Typescript"]}
    page="https://mugi111.github.io/JsonFormatter/"
    github="https://github.com/mugi111/JsonFormatter"
  />
</div>

<style>
  .works {
    display: flex;
  }
</style>
