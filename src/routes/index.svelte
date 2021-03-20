<script>
  import About from "../components/About.svelte";
  import Certification from "../components/Certification.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import SkillSet from "../components/SkillSet.svelte";
  import Top from "../components/Top.svelte";
  import Work from "../components/Work.svelte";
</script>

<header />
<main class="container">
  <section class="top snap">
    <Top />
  </section>
  <section class="main-content snap">
    <div class="sidebar">
      <Sidebar />
    </div>
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
  </section>
</main>

<style>
  .container {
    scroll-snap-type: y mandatory;
    overflow: scroll;
    height: 100vh;
  }

  .snap {
    position: relative;
    scroll-snap-align: start;
  }

  main {
    text-align: left;
    margin: 0 auto;
    min-width: 400px;
  }

  footer {
    text-align: center;
    color: #f0f0f0;
  }

  .main-content {
    display: flex;
  }

  .sidebar {
    top: 0px;
    position: sticky;
    height: 100vh;
    background-color: #050521;
    z-index: 1;
  }

  .body {
    padding: 30px;
    z-index: 1;
    display: block;
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
      display: block;
    }
  }
</style>
