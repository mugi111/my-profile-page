<script>
  import SkillTile from "./skill-tile";
  import Kicad from "../assets/kicad-logo.png";
  import React from "../assets/react-logo.png";
  import CommonLisp from "../assets/lisp-alien.png";
  import Svelte from "../assets/svelte-logo.png";
  import Kotlin from "../assets/kotlin-logo.png";
  import Ruby from "../assets/ruby-logo.png";
  import Python from "../assets/python-logo.png";
</script>

<div class="skill-tile-wrapper">
  <SkillTile imgSrc={Kicad} textTitle="KiCad" textBody="KiCadを使用した回路・基板設計" />
  <SkillTile imgSrc={React} textTitle="React" textBody="" />
  <SkillTile imgSrc={CommonLisp} textTitle="Common Lisp" textBody="ﾁｮｯﾄﾀﾞｹ" />
  <SkillTile imgSrc={Svelte} textTitle="Svelte" textBody="ちょっとだけ" />
  <SkillTile imgSrc={Kotlin} textTitle="Kotlin" textBody="初歩的なアプリ作成" />
  <SkillTile imgSrc={Ruby} textTitle="Ruby" textBody="基本文法のみ" />
  <SkillTile imgSrc={Python} textTitle="Python" textBody="基本文法のみ" />
</div>

<style>
  .skill-tile-wrapper {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
</style>