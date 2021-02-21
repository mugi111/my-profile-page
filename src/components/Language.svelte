<script>
  import SkillSetElement from "./SkillSetElement.svelte";
  import jsLogo from "../assets/javascript-logo.png";
  import tsLogo from "../assets/typescript-logo.svg";
  import cLogo from "../assets/c-logo.png";
  import csLogo from "../assets/csharp-logo.svg";
  import rubyLogo from "../assets/ruby-logo.png";
  import pythonLogo from "../assets/python-logo.png";
  import lispLogo from "../assets/lisp-alien.png";
  import kotlinLogo from "../assets/kotlin-logo.png";
</script>

<h3>Language</h3>
<div class="language-container">
  <SkillSetElement name="Javascript" image={jsLogo} inWork={2} inHobby={2} />
  <SkillSetElement name="Typescript" image={tsLogo} inWork={2} inHobby={2} />
  <SkillSetElement name="C" image={cLogo} inWork={0} inHobby={5} />
  <SkillSetElement name="C#" image={csLogo} inWork={2} inHobby={0} />
  <SkillSetElement name="Ruby" image={rubyLogo} inWork={1} inHobby={0} />
  <SkillSetElement name="Python3" image={pythonLogo} inWork={0} inHobby={1} />
  <SkillSetElement name="Lisp" image={lispLogo} inWork={0} inHobby={1} />
  <SkillSetElement name="Kotlin" image={kotlinLogo} inWork={0} inHobby={1} />
</div>

<style>
  h3 {
    text-shadow: 0px 0px 10px #a6a6a6, 0px 0px 10px #ffffff;
  }

  .language-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
