<script lang='ts'>
	import { writable } from 'svelte/store';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';

	const query = $page.url.searchParams.get("query");
	
    /*const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('query');*/

    export let data: PageData;
	const best = writable(data.documents);

</script>

<svelte:head>
	<title>Résultats de recherche</title>
	<meta name="description" content="Résultats de recherche" />
</svelte:head>

<section>
	{#if (query!=null)}
		<h1>Tout les résultats pour la recherche "{query.toLowerCase()}"</h1>
		{#each $best as item, index}
			
				{#if (item.rest_name.toLowerCase().includes(query.toLowerCase()))} 
					<a href="/restaurant?name={item.rest_name}">{item.rest_name}</a>
					<h5>{item.rest_description}</h5>
				{:else if (item.rest_description.toLowerCase().includes(query.toLowerCase()))} 
					<a href="/restaurant?name={item.rest_name}">{item.rest_name}</a>
					<h5>{item.rest_description}</h5>
				{/if}
		{/each} 
	{/if}
	<!--RandomRest /-->
</section>

<style>
	section{
		display: block;
		align-items: center;
		align-content: center;
		align-self: center;
	}
</style>
