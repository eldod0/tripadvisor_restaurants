<script>
	import RandomRest from "./RandomRest.svelte";

</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Page d'accueil" />
</svelte:head>

<section>
	<h1>Recherche de restaurants</h1>
	<div class="searchBar">
		<form>
			<input type="search" name="search"/><button type="submit">Recherche</button>
		</form>
	</div>

	<RandomRest />
</section>

<style>
	section{
		display: block;
		align-items: center;
		align-content: center;
		align-self: center;
	}

	div.searchBar{
		display: block;
	}

	form input{
        display: inline-block;
        border-radius: 5px;
        border-width: 2px;
		padding: 10px;
        width: 30em;
    }

	form button{
		display: inline-block;
		border-radius: 5px;
        border-width: 2px;
		padding: 10px;
	}
</style>
