<script lang='ts'>
    import type { PageData } from './$types';
    import { writable } from 'svelte/store';

    export let data: PageData;
    const bestRestaurants = writable(data.documents);

</script>

<div class="randomRestaurants">
    {#each $bestRestaurants as item, index}
        <div class="restaurant_Quickpresentation">
            <h3>{item._id}</h3>
        </div>
    {/each} 
</div>