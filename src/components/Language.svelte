<script>
  import SkillSetElement from "./SkillSetElement.svelte";
  import reactLogo from "../assets/react-logo.png";
</script>

<h3>Language</h3>
<div class="language-container">
  <SkillSetElement name="React" image={reactLogo} inWork={1} inHobby={3} />
  <SkillSetElement name="React" image={reactLogo} inWork={1} inHobby={3} />
  <SkillSetElement name="React" image={reactLogo} inWork={1} inHobby={3} />
</div>

<style>
  .language-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
