<script lang='ts'>
	import { writable } from 'svelte/store';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';

	const name = $page.url.searchParams.get("name");
	
    /*const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('query');*/

    export let data: PageData;
	const best = writable(data.documents);

</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content=name />
</svelte:head>

<section>
	{#if (name!=null)}
		{#each $best as item, index}
				{#if (item.rest_name.toLowerCase()==name.toLowerCase())} 
					<h1>{item.rest_name}</h1>
					<h5>{item.rest_address}</h5>
					<h3>{item.rest_description}</h3>
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
