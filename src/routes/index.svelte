<script>
  import HeaderNavLink from "../components/header-nav-link";
  import Home from "../components/home";
  import About from "../components/about";
  import Skill from "../components/skill";
  import Certification from "../components/certification";
<<<<<<< HEAD
  import OssContribute from "../components/oss-contribute";
=======
  import Works from "../components/works";
>>>>>>> 8a835fa43220720a3d911e5594df545bfef03331
  import Footer from "../components/footer";
</script>

<style>
  main {
    text-align: left;
    padding: 1em;
    margin: 0 auto;
  }

  .home-div {
    height: calc(100vh - 45px);
    width: 100%;
    display: inline-flex;
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

<header>
  <HeaderNavLink />
</header>
<main>
  <div class="home-div" id="home">
    <Home />
  </div>
  <div class="about-div" id="about">
    <About />
  </div>
  <div class="certification" id="certification">
    <Certification />
  </div>
  <div class="skill-div" id="skill">
    <Skill />
  </div>
<<<<<<< HEAD
  <div class="oss-div" id="oss">
    <OssContribute />
=======
  <div class="works-div" id="works">
    <Works />
  </div>
  <div class="certification" id="certification">
    <Certification />
>>>>>>> 8a835fa43220720a3d911e5594df545bfef03331
  </div>
</main>
<Footer />
