<script>
  import Framework from "./Framework.svelte";
  import Language from "./Language.svelte";
  import Software from "./Software.svelte";
</script>

<h2>Skill Set</h2>
<div class="skillsets">
  <Language />
  <Framework />
  <Software />
</div>

<style>
  h2 {
    font-size: 46px;
    text-shadow: 5px 5px 10px #a6a6a6, -5px -5px 10px #ffffff;
  }

  .skillsets {
    margin-bottom: 150px;
  }
</style>
