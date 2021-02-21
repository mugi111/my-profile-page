<script>
  import SkillSetElement from "./SkillSetElement.svelte";
  import reactLogo from "../assets/react-logo.png";
  import svelteLogo from "../assets/svelte-logo.png";
  import sapperLogo from "../assets/sapper-logo.png";
  import noimage from "../assets/no-image.png";
</script>

<h3>Framework</h3>
<div class="framework-container">
  <SkillSetElement name="React" image={reactLogo} inWork={2} inHobby={2} />
  <SkillSetElement name="Svelte" image={svelteLogo} inWork={0} inHobby={1} />
  <SkillSetElement name="Sapper" image={sapperLogo} inWork={0} inHobby={1} />
  <SkillSetElement name="ASP.NET" image={noimage} inWork={1} inHobby={0} />
</div>

<style>
  h3 {
    text-shadow: 0px 0px 10px #a6a6a6, 0px 0px 10px #ffffff;
  }

  .framework-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
