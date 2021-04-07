<script>
  export let title;
  export let body;
</script>

<div class="about-element">
  <h3>{title}</h3>
  {#each body as text}
    <span>{text}</span>
  {/each}
</div>

<style>
  .about-element {
    min-width: 150px;
    display: inline-grid;
    position: relative;
    margin: 5px;
    padding: 25px;
    border-radius: 10px;
    background: var(--white2);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }

  h3 {
    font-size: var(--sub-title-size);
    margin-block-start: 0px;
    margin-block-end: 10px;
  }
</style>
