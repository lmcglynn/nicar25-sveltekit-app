<script>
  import { page } from '$app/stores';
  let catId = $page.params.catid;
  import ImageFetch from '$components/ImageFetch.svelte';

  import { filteredBreedsStore } from '$stores/filteredBreedsStore';
  $: selectedCat = $filteredBreedsStore.filter((breed) => breed.id === catId)[0];

  $: console.log(selectedCat);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
  <!-- Main Content -->
  <div>
    <h2 class="text-2xl font-bold">{selectedCat.name}</h2>
    <p class="mt-2 text-gray-600">
      {selectedCat.description}
    </p>
    <ul>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Origin:</span> {selectedCat.origin}
      </li>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Temperament:</span> {selectedCat.temperament}
      </li>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Life Span:</span> {selectedCat.life_span}
      </li>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Weight:</span> {selectedCat.life_span}
      </li>
    </ul>
  </div>

  <!-- Photo -->
  <div>
    <ImageFetch
      searchId={selectedCat.id}
      altText={selectedCat.name}
    />
  </div>
</div>
