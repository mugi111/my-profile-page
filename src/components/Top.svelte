<script>
  import TopAcountLink from "./TopAcountLink.svelte";
  import ProfileIcon from "../assets/mg-twitter.png";
</script>

<div class="top">
  <div class="top__background">
    <div class="top__background--blue" />
  </div>
  <div class="top__profile">
    <h1 class="top__profile--name">Hirunuma Takumi</h1>
    <div class="top__profile--acount">
      <TopAcountLink />
    </div>
    <img alt="profile-icon" src={ProfileIcon} class="top__profile--icon" />
  </div>
</div>

<style>
  .top {
    width: 100vw;
    height: 100vh;
  }

  .top__background {
    width: inherit;
    height: inherit;
    background-color: #333333;
  }

  .top__background--blue {
    position: absolute;
    right: 0;
    bottom: 0;
    border-style: solid;
    border-width: 0 0 75vh 75vw;
    border-color: transparent transparent #236ed9 transparent;
  }

  .top__profile {
    display: grid;
    position: absolute;
    top: 45vh;
    left: 10vw;
  }

  .top__profile--name {
    grid-row: 1 / 2;
    font-size: 86px;
    margin-bottom: 0px;
  }

  .top__profile--acount {
    grid-row: 2 / 3;
  }

  .top__profile--icon {
    width: 300px;
    margin-left: 100px;
    grid-row: 1 / 3;
    border-radius: 50%;
  }
</style>
