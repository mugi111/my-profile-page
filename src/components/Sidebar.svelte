<script>
  import Nav from "./Nav.svelte";
  import Profile from "./profile.svelte";
</script>

<div class="sidebar-content">
  <Profile />
  <Nav />
</div>

<style>
  .sidebar-content {
    background-color: #f0eee2;
    overflow-y: hidden;
    height: 100vh;
  }
</style>
