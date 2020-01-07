<script>
  import SkillTile from "./skill-tile";
  import Kicad from "../assets/kicad-logo.png";
  import React from "../assets/react-logo.png";
  import CommonLisp from "../assets/common-lisp-logo.png";
  import Svelte from "../assets/svelte-logo.png";
</script>

<h2 class="title-skill">Skill</h2>
<SkillTile imgSrc={Kicad} textTitle="KiCad" textBody="KiCadを使用した回路・基板設計" />
<SkillTile imgSrc={React} textTitle="React" textBody="" />
<SkillTile imgSrc={CommonLisp} textTitle="Common Lisp" textBody="" />
<SkillTile imgSrc={Svelte} textTitle="Svelte" textBody="ちょっとだけ" />

<style>
  .title-skill {
    font-size: 2em;
    border-bottom: 3px dotted blue;
  }
</style>