<script>
  import SkillSetMeter from "./SkillSetMeter.svelte";

  export let image;
  export let name;
  export let inWork;
  export let inHobby;
</script>

<div class="skillset-element">
  <img src={image} alt={`${name}-img`} class="skillset-img" />
  <span class="skillset-name">{name}</span>
  <div class="skillset-meter">
    <SkillSetMeter years={inWork} />
    <SkillSetMeter years={inHobby} />
  </div>
</div>

<style>
  .skillset-element {
    display: grid;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 10px #a6a6a6, -5px -5px 10px #ffffff;
  }

  .skillset-img {
    width: 70px;
    height: 70px;
    margin-right: 15px;
    grid-column: 1/2;
    grid-row: 1/3;
  }

  .skillset-name {
    width: 180px;
    grid-column: 2/10;
    grid-row: 1/2;
  }

  .skillset-meter {
    width: 180px;
    grid-column: 2/10;
    grid-row: 2/3;
  }
</style>
