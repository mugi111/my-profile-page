<script>
  import SkillSetMeter from "./SkillSetMeter.svelte";

  export let image;
  export let name;
  export let inWork;
  export let inHobby;
</script>

<div class="skillset-element">
  <div class="skillset-img-container">
    <img src={image} alt={`${name}-img`} class="skillset-img" />
  </div>
  <span class="skillset-name">{name}</span>
  <div class="skillset-meter">
    <span>
      <SkillSetMeter years={inWork} />
      <SkillSetMeter years={inHobby} />
    </span>
  </div>
</div>

<style>
  .skillset-element {
    width: 300px;
    height: 100px;
    display: grid;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 10px #a6a6a6, -5px -5px 10px #ffffff;
  }

  .skillset-img-container {
    display: flex;
    width: 100px;
    height: 100px;
    align-items: center;
    align-content: center;
    margin-right: 20px;
    grid-column: 1/2;
    grid-row: 1/4;
  }

  .skillset-img {
    width: auto;
    height: auto;
    max-width: 100px;
    max-height: 100px;
  }

  .skillset-name {
    width: 180px;
    grid-column: 2/10;
    grid-row: 1/2;
  }

  .skillset-meter {
    display: flex;
    align-items: center;
    align-content: center;
    grid-column: 2/10;
    grid-row: 2/4;
  }
</style>
