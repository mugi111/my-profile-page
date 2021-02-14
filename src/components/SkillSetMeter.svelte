<script>
  import About from "./About.svelte";
  import Framework from "./Framework.svelte";

  export let years;
</script>

<div class="meter-container">
  {#each new Array(years) as _}
    <span class="meter-square" />
  {/each}
</div>

<style>
  .meter-container {
    display: flex;
    margin: 5px 0px;
    height: 20px;
  }

  .meter-square {
    height: 20px;
    width: 10px;
    margin: 1px;
    border-radius: 3px;
    background-color: #00c4ff;
  }
</style>
