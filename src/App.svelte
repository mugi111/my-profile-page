<script>
	import HeaderNavLink from "./components/header-nav-link";
	import Home from "./components/home";
	import About from "./components/about";
	import Skill from "./components/skill";
</script>

<main>
	<HeaderNavLink />
	<div class="home-div" id="home">
		<Home />
	</div>
	<div class="about-div" id="about">
		<About />
	</div>
	<div class="skill-div" id="skill">
		<Skill />
	</div>
</main>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: azure;
	}
	
	.home-div {
		height: calc(100vh - 45px);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>