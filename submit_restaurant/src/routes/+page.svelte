<script lang='ts'>
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

    export let data: PageData;
	const bestRestaurants = writable(data.documents);
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

	{#each $bestRestaurants as item, index}
        <div class="restaurant_Quickpresentation">
            <h3>{item.rest_name}</h3>
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
