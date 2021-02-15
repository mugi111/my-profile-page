<script>
  export let isWork;
  export let years;
  const squareClass = isWork ? "meter-square-work" : "meter-square-hobby";
</script>

<div class="meter-container">
  {#each new Array(years) as _}
    <span class={squareClass} />
  {/each}
</div>

<style>
  .meter-container {
    display: flex;
    margin: 5px 0px;
    height: 20px;
  }

  .meter-square-work {
    height: 20px;
    width: 10px;
    margin: 1px;
    border-radius: 3px;
    background-color: #ff007d;
  }

  .meter-square-hobby {
    height: 20px;
    width: 10px;
    margin: 1px;
    border-radius: 3px;
    background-color: #00c4ff;
  }
</style>
