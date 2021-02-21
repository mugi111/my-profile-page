<script>
  import SkillSetElement from "./SkillSetElement.svelte";
  import unityLogo from "../assets/unity-logo.png";
  import kicadLogo from "../assets/kicad-logo.png";
</script>

<h3>Software</h3>
<div class="software-container">
  <SkillSetElement name="Unity" image={unityLogo} inWork={1} inHobby={0} />
  <SkillSetElement name="KiCad" image={kicadLogo} inWork={1} inHobby={4} />
</div>

<style>
  h3 {
    text-shadow: 0px 0px 10px #a6a6a6, 0px 0px 10px #ffffff;
  }

  .software-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
