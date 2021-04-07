<script>
  import About from "../components/About.svelte";
  import Certification from "../components/Certification.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import SkillSet from "../components/SkillSet.svelte";
  import Work from "../components/Work.svelte";
</script>

<main class="container">
  <div class="sidebar">
    <Sidebar />
  </div>
  <div class="main-content">
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
    display: flex;
  }

  .sidebar {
    position: sticky;
    top: 0;
    background-color: var(--white2);
    box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.1);
  }

  footer {
    text-align: center;
    color: var(--black1);
  }

  .main-content {
    z-index: 1;
  }

  .content {
    padding: 40px;
  }
</style>
