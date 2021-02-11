<script>
  import Sidebar from "../components/Sidebar.svelte";
</script>

<header />
<main>
  <div class="sidebar">
    <Sidebar />
  </div>
  <div class="body" />
</main>

<style>
  main {
    text-align: left;
    margin: 0 auto;
  }

  .sidebar {
    position: sticky;
  }

  @media (max-width: 640px) {
    header {
      display: none;
    }
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
