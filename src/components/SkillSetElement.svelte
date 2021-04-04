<script>
  import SkillSetMeter from "./SkillSetMeter.svelte";

  export let image;
  export let name;
  export let inWork;
  export let inHobby;

  let isMoreThanOne = inWork <= 1 ? "year" : "years";
  const work = inWork === 0 ? "" : `Work: ${inWork}${isMoreThanOne}`;
  isMoreThanOne = inHobby <= 1 ? "year" : "years";
  const hobby = inHobby === 0 ? "" : `Hobby: ${inHobby}${isMoreThanOne}`;
</script>

<div class="skillset-element">
  <div class="skillset-img-container">
    <img src={image} alt={`${name}-img`} class="skillset-img" />
  </div>
  <div class="skillset-name">{name}</div>
  <div class="skillset-years">{work} {hobby}</div>
  <div class="skillset-meter">
    <span>
      <SkillSetMeter years={inWork} isWork={true} />
      <SkillSetMeter years={inHobby} isWork={false} />
    </span>
  </div>
</div>

<style>
  .skillset-element {
    width: 300px;
    height: 80px;
    display: grid;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    background: var(--white2);
    color: var(--black1);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  }

  .skillset-img-container {
    display: flex;
    width: 80px;
    height: 80px;
    align-items: center;
    align-content: center;
    margin-right: 20px;
    grid-column: 1/2;
    grid-row: 1/6;
  }

  .skillset-img {
    width: auto;
    height: auto;
    max-width: 80px;
    max-height: 80px;
  }

  .skillset-name {
    width: 180px;
    grid-column: 2/10;
    grid-row: 1/2;
  }

  .skillset-years {
    font-size: 12px;
    grid-column: 2/10;
    grid-row: 2/3;
  }

  .skillset-meter {
    display: flex;
    align-items: center;
    align-content: center;
    grid-column: 2/10;
    grid-row: 3/6;
  }
</style>
