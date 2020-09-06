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

<style>
  .skill-tile-wrapper {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
</style>

<div class="skill-tile-wrapper">
  <SkillTile
    imgSrc={Kicad}
    textTitle="KiCad"
    textBody={['回路設計', '実体配線']} />
  <SkillTile imgSrc={React} textTitle="React" textBody={['SPAの作成']} />
  <SkillTile
    imgSrc={CommonLisp}
    textTitle="Common Lisp"
    textBody={['ﾁｮｯﾄﾀﾞｹ']} />
  <SkillTile
    imgSrc={Svelte}
    textTitle="Svelte"
    textBody={['SPAの作成', 'SapparのSSR実装']} />
  <SkillTile
    imgSrc={Kotlin}
    textTitle="Kotlin"
    textBody={['簡単なAndroidアプリの実装']} />
  <SkillTile
    imgSrc={Ruby}
    textTitle="Ruby"
    textBody={['基本文法のみ', 'Slack botの作成']} />
  <SkillTile
    imgSrc={Python}
    textTitle="Python"
    textBody={['基本文法のみ', 'Slack botの作成', 'Twitter Botの作成']} />
</div>
