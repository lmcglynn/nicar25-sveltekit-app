<script>
  export let data; // `data` contains everything returned from `+layout.js`
  let breedsData = data.breedsData; // Extract breedsData

  import Card from '../components/Card.svelte';
</script>

<h1>Homepage</h1>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each breedsData as breed}
    <Card
      title={breed.name}
      subtitle={breed.temperament}
      description={breed.description}>
    </Card>
  {/each}
</ul>