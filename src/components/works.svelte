<script>
  import WorksTile from "./works-tile";
  import portfolio from "../assets/works-portfolio.png";
  import reactGhRepos from "../assets/works-react-gh-repos.png";
  import JsonFormatter from "../assets/works-json-formatter.png";
</script>

<style>
  .title-works {
    color: silver;
    font-size: 2em;
  }
</style>

<h2 class="title-works">Works</h2>
<div>
  <WorksTile
    imgSrc={portfolio}
    textBody={['ポートフォリオ', '(Svelte, Sapper, Netlify)']}
    linkSrc="https://portfolio.mugi.cat/"
    ghSrc="https://github.com/mugi111/my-profile-page" />
  <WorksTile
    imgSrc={reactGhRepos}
    textBody={['Githubのピン留めみたいにリポジトリを表示するReactコンポーネント', '(React, Typescript)']}
    linkSrc="https://mugi111.github.io/react-github-repos/"
    ghSrc="https://github.com/mugi111/react-github-repos"
    npmSrc="https://www.npmjs.com/package/react-github-repos" />
  <WorksTile
    imgSrc={JsonFormatter}
    textBody={['Jsonを作るWebApp', '(React, Recoil, Typescript)']}
    linkSrc="https://mugi111.github.io/JsonFormatter/"
    ghSrc="https://github.com/mugi111/JsonFormatter" />
</div>
