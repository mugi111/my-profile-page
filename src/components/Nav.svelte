<div class="nav-container">
  <a href="#about" class="nav-content">
    <span>About</span>
  </a>
  <a href="#skillset" class="nav-content">
    <span>Skill Set</span>
  </a>
  <a href="#work" class="nav-content">
    <span>Work</span>
  </a>
  <a href="#certification" class="nav-content">
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
    color: #f5f5f5;
    cursor: pointer;
    text-align: left;
  }

  .nav-content:hover span {
    color: #d8d8d8;
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

  @media (max-width: 640px) {
    .nav-container {
      display: none;
    }
  }
</style>
