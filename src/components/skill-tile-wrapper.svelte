<script>
  import SkillTile from "./skill-tile";
  import Kicad from "../assets/kicad-logo.png";
  import React from "../assets/react-logo.png";
  import CommonLisp from "../assets/common-lisp-logo.png";
  import Svelte from "../assets/svelte-logo.png";
</script>

<div class="skill-tile-wrapper">
  <SkillTile imgSrc={Kicad} textTitle="KiCad" textBody="KiCadを使用した回路・基板設計" />
  <SkillTile imgSrc={React} textTitle="React" textBody="" />
  <SkillTile imgSrc={CommonLisp} textTitle="Common Lisp" textBody="ﾁｮｯﾄﾀﾞｹ" />
  <SkillTile imgSrc={Svelte} textTitle="Svelte" textBody="ちょっとだけ" />
</div>

<style>
  .skill-tile-wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    text-align: center;
  }
</style>