<script>
	import HeaderNavLink from "./components/header-nav-link";
</script>

<HeaderNavLink />
<main>
	<div id="home">
		<h1>Hirunuma Takumi</h1>
		<p>- Portfolio Site -</p>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>