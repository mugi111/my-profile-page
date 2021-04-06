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
    font-size: var(--title-size);
    margin-block-start: 0px;
    margin-block-end: -30px;
    text-shadow: var(--title-shadow);
  }

  .skillsets-container {
    margin-bottom: 50px;
    min-height: 100vh;
  }

  .skillsets {
    padding: 40px 10px 20px;
    height: 90%;
    position: relative;
    min-width: 300px;
  }
</style>
