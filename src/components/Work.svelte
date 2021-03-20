<script>
  import WorkElement from "./WorkElement.svelte";
  import workPortfolio from "../assets/works-portfolio.png";
  import workReactGhRepos from "../assets/works-react-gh-repos.png";
  import workJsonWebApp from "../assets/works-json-formatter.png";
</script>

<div class="works-container">
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
</div>

<style>
  h2 {
    font-size: 96px;
    margin-block-start: 0px;
    margin-block-end: -40px;
  }

  .works-container {
    display: block;
    min-height: 100vh;
    margin-bottom: 50px;
  }

  .works {
    background-color: rgba(34, 109, 217, 0.4);
    padding: 40px 10px 20px;
    width: calc(80vw - 200px);
    height: 90%;
    left: 5vw;
    position: relative;
    min-width: 300px;
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 64px;
      margin-block-end: -30px;
    }

    .works {
      width: 80vw;
    }
  }
</style>
