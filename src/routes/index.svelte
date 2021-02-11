<script>
  import Sidebar from "../components/Sidebar.svelte";
</script>

<header />
<main>
  <Sidebar />
</main>

<style>
  main {
    text-align: left;
    padding: 1em;
    margin: 0 auto;
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
