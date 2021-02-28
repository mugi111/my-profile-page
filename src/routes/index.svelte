<script>
  import About from "../components/About.svelte";
  import Background from "../components/Background.svelte";
  import Certification from "../components/Certification.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import SkillSet from "../components/SkillSet.svelte";
  import Work from "../components/Work.svelte";
</script>

<header />
<main>
  <div class="sidebar">
    <Sidebar />
  </div>
  <Background />
  <div class="body">
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
  main {
    text-align: left;
    margin: 0 auto;
    min-width: 400px;
  }

  footer {
    text-align: center;
    color: #050521;
  }

  .sidebar {
    top: 0px;
    position: sticky;
    height: 100vh;
    background-color: #050521;
    box-shadow: 5px -5px 10px #d0d0d0;
    z-index: 1;
  }

  .body {
    padding: 30px;
    z-index: 1;
  }

  @media (max-width: 640px) {
    .sidebar {
      display: block;
      position: relative;
      width: 100vw;
      height: 100%;
      min-width: 400px;
    }
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
      display: flex;
    }
  }
</style>
