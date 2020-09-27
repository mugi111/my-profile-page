<script>
  import { skillModalState, skillDetail } from "../stores.js";
  import githubIco from "../assets/works-github.png";
  import npmIco from "../assets/works-npm.png";
  import qiitaIco from "../assets/works-qiita.png";
  import blogIco from "../assets/works-blog.png";
  export let _ghSrc = null;
  export let _npmSrc = null;
  export let _qiitaSrc = null;
  export let _blogSrc = null;
  let ghSrc = _ghSrc;
  let npmSrc = _npmSrc;
  let qiitaSrc = _qiitaSrc;
  let blogSrc = _blogSrc;
  const handleClickTile = src => {
    window.open(src);
  };
</script>

<style>
  .link-list {
    display: flex;
    position: fixed;
    bottom: 5px;
    right: 5px;
  }
  .img-span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin: 3px;
    text-align: center;
    vertical-align: middle;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media (max-width: 640px) {
    .img-span {
      width: 30px;
      height: 30px;
    }
  }
</style>

<div class="link-list">
  {#if ghSrc}
    <span
      class="img-span"
      on:click={() => handleClickTile(ghSrc)}
      style="background-image: url('{githubIco}')" />
  {/if}
  {#if npmSrc}
    <span
      class="img-span"
      on:click={() => handleClickTile(npmSrc)}
      style="background-image: url('{npmIco}')" />
  {/if}
  {#if qiitaSrc}
    <span
      class="img-span"
      on:click={() => handleClickTile(qiitaSrc)}
      style="background-image: url('{qiitaIco}')" />
  {/if}
  {#if blogSrc}
    <span
      class="img-span"
      on:click={() => handleClickTile(blogSrc)}
      style="background-image: url('{blogIco}')" />
  {/if}
</div>
