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
    font-size: 60px;
    margin-block-start: 0px;
    margin-block-end: -30px;
    padding-top: 60px;
    margin-top: -60px;
  }

  .skillsets-container {
    margin-bottom: 50px;
    min-height: 100vh;
  }

  .skillsets {
    padding: 40px 10px 20px;
    width: calc(80vw - 200px);
    height: 90%;
    left: 5vw;
    position: relative;
    min-width: 300px;
  }
</style>
