<script>
  export let isWork;
  export let years;
  const squareClass = isWork ? "meter-square-work" : "meter-square-hobby";
  let pink = [255, 0, 125];
  let cyan = [0, 169, 255];
</script>

<div class="meter-container">
  {#if isWork}
    {#each new Array(years) as _}
      <span
        class={squareClass}
        style={`background-color: rgba(${pink[0]}, ${(pink[1] =
          pink[1] + 12)}, ${(pink[2] = pink[2] + 6)}, 1);`}
      />
    {/each}
  {:else}
    {#each new Array(years) as _}
      <span
        class={squareClass}
        style={`background-color: rgba(${(cyan[0] = cyan[0] + 12)}, ${(cyan[1] =
          cyan[1] + 6)}, ${cyan[2]}, 1);`}
      />
    {/each}
  {/if}
</div>

<style>
  .meter-container {
    display: flex;
    margin: 5px 0px;
    height: 20px;
    width: 180px;
    background-color: white;
    box-shadow: inset 5px 5px 10px #e0e0e0, inset -5px -5px 10px #ffffff;
    border-radius: 3px;
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
