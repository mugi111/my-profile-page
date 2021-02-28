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
    font-size: 46px;
  }

  .skillsets-container {
    color: rgba(255, 0, 125, 0.5);
    background-color: rgba(0, 195, 255, 0.5);
    padding: 10px;
    margin-bottom: 150px;
  }
</style>
