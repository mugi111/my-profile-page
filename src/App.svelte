<script>
	import HeaderNavLink from "./components/header-nav-link";
	import Home from "./components/home";
	import About from "./components/about";
</script>

<HeaderNavLink />
<main>
	<div class="home-div" id="home">
		<Home />
	</div>
	<div class="about-div" id="about">
		<About />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	.home-div {
		background-color: azure;
		height: calc(100vh - 45px);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>