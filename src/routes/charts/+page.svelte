<script>  
import Card from '$components/Card.svelte';
  export let data; // `data` contains everything returned from `+layout.js`
  let breedsData = data.breedsData; // Extract breedsData

  $: weights = breedsData.reduce((acc, obj) => {
  const value = obj.origin;
  if (acc[value]) {
    acc[value] += 1;
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});
</script>

<h1>SvelteKit Data App</h1>


