<div class="top">
  <div class="top__background">
    <div class="top__background--blue" />
  </div>
  <div class="top__profile">
    <h1 class="top__profile--name">Hirunuma Takumi</h1>
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
    position: absolute;
    top: 40vh;
    left: 5vw;
  }

  .top__profile--name {
    margin: 0px;
    font-size: 86px;
  }
</style>
