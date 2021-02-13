<script>
  import About from "../components/About.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import SkillSet from "../components/SkillSet.svelte";
  import Work from "../components/Work.svelte";
</script>

<header />
<main>
  <div class="sidebar">
    <Sidebar />
  </div>
  <div class="body">
    <div class="about content">
      <About />
    </div>
    <div class="skillset content">
      <SkillSet />
    </div>
    <div class="work content">
      <Work />
    </div>
  </div>
</main>

<style>
  main {
    text-align: left;
    margin: 0 auto;
  }

  .sidebar {
    top: 0px;
    position: sticky;
    height: 100vh;
    width: 250px;
    background-color: #f0eee2;
  }

  .body {
    padding: 30px;
  }

  @media (max-width: 640px) {
    .sidebar {
      display: block;
      width: 100vw;
    }
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
      display: flex;
    }
  }
</style>
