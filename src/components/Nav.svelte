<script>
  import { scrollto } from "svelte-scrollto";
</script>

<div class="nav-container">
  <a href="/" class="nav-content" use:scrollto={"#about"}>
    <span>About</span>
  </a>
  <a href="/" class="nav-content" use:scrollto={"#skillset"}>
    <span>Skill Set</span>
  </a>
  <a href="/" class="nav-content" use:scrollto={"#work"}>
    <span>Work</span>
  </a>
  <a href="/" class="nav-content" use:scrollto={"#certification"}>
    <span>Certification</span>
  </a>
</div>

<style>
  .nav-container {
    background-color: inherit;
    text-align: center;
    width: 200px;
  }

  .nav-content {
    padding: 10px 20px;
    display: block;
    z-index: 1;
    text-decoration: none;
    color: #333333;
    cursor: pointer;
    text-align: left;
  }

  .nav-content:hover span {
    color: #777777;
    background: linear-gradient(
      90deg,
      rgba(0, 196, 255, 1) 0%,
      rgba(255, 0, 125, 1) 50%,
      rgba(255, 199, 0, 1) 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 12%;
    background-position: center;
  }
</style>
