<script lang='ts'>
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import { navigate } from 'svelte-routing';

    export let data: PageData;
	const bestRestaurants = writable(data.documents);
	let searchValue = '';
	let showResults = false;

	function handleSearchInput(event: Event) {
		searchValue = (event.target as HTMLInputElement).value;
	}

</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Page d'accueil" />
</svelte:head>

<section>
	<h1>Recherche de restaurants</h1>
	<div class="searchBar">
		<!--form on:submit={handleSearchSubmit}/-->
		<form action={"/resultats"}>
			<input type="search" name="query" bind:value={searchValue} on:input={handleSearchInput}/>
			<button type="submit">Recherche</button>		
		</form>
	</div>
	<h1>Nos derniers ajouts</h1>
	{#each $bestRestaurants  as item, index}
	<div class="restaurant_Quickpresentation">
		<a href="/restaurant?name={item.rest_name}">{item.rest_name}</a>
		<h5>{item.rest_description}</h5>

	</div>
	{/each}
	<!--RandomRest /-->
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
		background-color: white;
		transition: 0.3s;
	}

	form button:hover{
		background-color: black;
        color: white;
	}
</style>
