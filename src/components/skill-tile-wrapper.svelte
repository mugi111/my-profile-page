<script>
  import SkillTile from "./skill-tile";
  import Kicad from "../assets/kicad-logo.png";
  import React from "../assets/react-logo.png";
  import CommonLisp from "../assets/lisp-alien.png";
  import Svelte from "../assets/svelte-logo.png";
  import Kotlin from "../assets/kotlin-logo.png";
  import Ruby from "../assets/ruby-logo.png";
  import Python from "../assets/python-logo.png";
  import Golang from "../assets/go-logo.png";
  import Unity from "../assets/unity-logo.png";
  import Sass from "../assets/sass-logo.png";
  import Clang from "../assets/c-logo.png";
  import Sapper from "../assets/sapper-logo.png";
  import Javascript from "../assets/javascript-logo.png";
  import Rust from "../assets/rust-logo.png";
</script>

<style>
  .skill-tile-wrapper {
    display: inline-flex;
    justify-content: left;
    flex-wrap: wrap;
    text-align: center;
  }
  .title-language {
    color: silver;
    font-size: 1.5em;
  }
  .title-framework {
    color: silver;
    font-size: 1.5em;
  }
  .title-tools {
    color: silver;
    font-size: 1.5em;
  }
</style>

<h3 class="title-language">Language</h3>
<div class="skill-tile-wrapper">
  <SkillTile
    imgSrc={Clang}
    textTitle="C"
    textBody={['マイコンプログラミング']} />
  <SkillTile imgSrc={Javascript} textTitle="Javascript" textBody={[]} />
  <SkillTile
    imgSrc={CommonLisp}
    textTitle="Common Lisp"
    textBody={['少しだけ']} />
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
    textTitle="Python 3"
    textBody={['基本文法のみ', 'Slack botの作成', 'Twitter Botの作成']} />
  <SkillTile imgSrc={Golang} textTitle="Go" textBody={['チュートリアル']} />
  <SkillTile imgSrc={Rust} textTitle="Rust" textBody={['チュートリアル']} />
  <SkillTile imgSrc={Sass} textTitle="Sass" textBody={['SassというよりScss']} />
</div>

<h3 class="title-framework">Framework</h3>
<div class="skill-tile-wrapper">
  <SkillTile imgSrc={React} textTitle="React" textBody={['SPAの作成']} />
  <SkillTile imgSrc={Svelte} textTitle="Svelte" textBody={['SPAの作成']} />
  <SkillTile imgSrc={Sapper} textTitle="Sapper" textBody={[]} />
</div>

<h3 class="title-tools">Tools</h3>
<div class="skill-tile-wrapper">
  <SkillTile
    imgSrc={Kicad}
    textTitle="KiCad"
    textBody={['回路設計', '実体配線']} />
  <SkillTile imgSrc={Unity} textTitle="Unity3D" textBody={['基礎的な開発']} />
</div>
