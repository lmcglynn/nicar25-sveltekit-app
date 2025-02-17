<script>
  import { page } from "$app/stores";

  import { LayerCake, Svg } from "layercake";

  import Radar from "$components/layercake/Radar.svelte";
  import AxisRadial from "$components/layercake/AxisRadial.svelte";
  let catId = $page.params.catid;
  import ImageFetch from "$components/ImageFetch.svelte";

  import { filteredBreedsStore } from "$stores/filteredBreedsStore";
  $: selectedCat = $filteredBreedsStore.filter(
    (breed) => breed.id === catId,
  )[0];

  $: console.log();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 items-center">
  <!-- Main Content -->
  <div>
    <h2 class="text-2xl font-bold">{selectedCat.name}</h2>
    <p class="mt-2 text-gray-600">
      {selectedCat.description}
    </p>
    <ul>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Origin:</span>
        {selectedCat.origin}
      </li>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Temperament:</span>
        {selectedCat.temperament}
      </li>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Life Span:</span>
        {selectedCat.life_span}
      </li>
      <li class="mt-2 text-gray-600">
        <span class="font-bold">Weight:</span>
        {selectedCat.life_span}
      </li>
    </ul>
  </div>
  <div>
    <ImageFetch searchId={selectedCat.id} altText={selectedCat.name} />
  </div>
  <div class="chart-container rounded-xl overflow-hidden border border-border max-w-sm">
    <h3 class="font-bold">Braininess</h3>
    {#if typeof selectedCat === "object"}
      <LayerCake
        padding={{ top: 40, right: 40, bottom: 10, left: 40 }}
        x={[
          "intelligence",
          "adaptability",
          "affection_level",
          "child_friendly",
          "stranger_friendly",
        ]}
        xDomain={[0, 5]}
        xRange={({ height }) => [0, height / 2.5]}
        data={[selectedCat]}
      >
        <Svg>
          <Radar />
          <AxisRadial />
        </Svg>
      </LayerCake>
    {/if}
  </div>
  <div class="chart-container rounded-xl overflow-hidden border border-border max-w-sm">
    <h3 class="font-bold">Purrsonality</h3>
    {#if typeof selectedCat === "object"}
      <LayerCake
        padding={{ top: 40, right: 40, bottom: 10, left: 40 }}
        x={["energy_level", "vocalisation", "social_needs"]}
        xDomain={[0, 5]}
        xRange={({ height }) => [0, height / 2.5]}
        data={[selectedCat]}
      >
        <Svg>
          <Radar />
          <AxisRadial />
        </Svg>
      </LayerCake>
    {/if}
  </div>
</div>

<style>
  .chart-container {
    width: 100%;
    height: 250px;
    position: relative;
  }
</style>
