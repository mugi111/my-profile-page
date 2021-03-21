<script>
  import About from "../components/About.svelte";
  import Certification from "../components/Certification.svelte";
  import Header from "../components/Header.svelte";
  import SkillSet from "../components/SkillSet.svelte";
  import Top from "../components/Top.svelte";
  import Work from "../components/Work.svelte";
</script>

<header>
  <Header />
</header>
<main class="container">
  <div class="top snap">
    <Top />
  </div>
  <div class="main-content snap">
    <div class="about content" id="about">
      <About />
    </div>
    <div class="skillset content" id="skillset">
      <SkillSet />
    </div>
    <div class="work content" id="work">
      <Work />
    </div>
    <div class="certification content" id="certification">
      <Certification />
    </div>
    <footer>
      <span class="footer">© 2021 Takumi Hirunuma</span>
    </footer>
  </div>
</main>

<style>
  .container {
    scroll-snap-type: y proximity;
    overflow: scroll;
    height: 100vh;
    -webkit-scroll-behavior: smooth;
    scroll-behavior: smooth;
  }

  .snap {
    position: relative;
    scroll-snap-align: start;
  }

  .top {
    z-index: 3;
  }

  header {
    background-color: #333333;
    width: 100vw;
    position: fixed;
    right: 0px;
    z-index: 2;
  }

  footer {
    text-align: center;
    color: #f0f0f0;
    width: 100vw;
  }

  .main-content {
    padding-top: 60px;
    display: block;
    z-index: 1;
    scroll-padding-top: 60px;
  }

  .content {
    padding: 20px;
  }
</style>
