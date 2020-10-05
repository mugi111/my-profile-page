<script>
  import WorksTile from "./works-tile";
  import portfolio from "../assets/works-portfolio.png";
  import reactGhRepos from "../assets/works-react-gh-repos.png";
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
    ghSrc="https://github.com/mugi111/my-profile-page" />
  <WorksTile
    imgSrc={reactGhRepos}
    textBody={['Githubのピン留めみたいにリポジトリを表示するReactコンポーネント', '(React, Typescript)']}
    ghSrc="https://github.com/mugi111/react-github-repos"
    npmSrc="https://www.npmjs.com/package/react-github-repos" />
</div>
