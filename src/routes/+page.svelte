<script>

  import Card from '../components/Card.svelte';
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

$: console.log(weights);
</script>

<h1>SvelteKit Data App</h1>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each breedsData as breed}
    <Card
      title={breed.name}
      subtitle={breed.temperament}
      description={breed.description}>
    </Card>
  {/each}
</ul>