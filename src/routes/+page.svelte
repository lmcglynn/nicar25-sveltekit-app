<script>

  import Card from '$components/Card.svelte';
  export let data;
  let breeds = data.breeds;
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each breeds as breed}
    <Card
      image={breed.id}
      title={breed.name}
      subtitle={breed.temperament}
      description={breed.description}>
    </Card>
  {/each}
</ul>