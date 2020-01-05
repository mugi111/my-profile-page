<script>
	import HeaderNavLink from "./components/header-nav-link";
	import About from "./components/about";
</script>

<HeaderNavLink />
<main>
	<div class="home-div" id="home">
		<h1>Hirunuma Takumi</h1>
		<p>- Portfolio Site -</p>
	</div>
	<div id="about">
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

	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		font-size: 2em;
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