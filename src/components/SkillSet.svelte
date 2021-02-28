<script>
  import Framework from "./Framework.svelte";
  import Language from "./Language.svelte";
  import Software from "./Software.svelte";
</script>

<div class="skillsets-container">
  <h2>Skill Set</h2>
  <div class="skillsets">
    <Language />
    <Framework />
    <Software />
  </div>
</div>

<style>
  h2 {
    font-size: 96px;
    margin-block-start: 0px;
    margin-block-end: -40px;
  }

  .skillsets-container {
    color: rgba(255, 0, 125, 0.75);
    margin-bottom: 50px;
    min-height: 100vh;
  }

  .skillsets {
    background-color: rgba(0, 195, 255, 0.6);
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

    .skillsets {
      width: 80vw;
    }
  }
</style>
