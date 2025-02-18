<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import selectedCountry from "$stores/countryStore";  
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';

  // Stores
  export let data;
  let countries = data.countries;
  let breeds = data.breeds;

  $: filteredBreeds =
    $selectedCountry && $selectedCountry !== "All"
      ? breeds.filter((breed) => breed.origin === $selectedCountry)
      : breeds;

  $: filteredBreedsStore.set(filteredBreeds);
</script>

<Header options={countries} />

<main class="container flex justify-center w-full mx-auto mt-40 mb-8">
  <slot />
</main>

<footer class="flex justify-center w-full mx-auto mt-8 bg-slate-200 py-16">
  <!-- three column grid, max 600 pixels wide, centered -->
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:max-w-2xl">
    <div class="flex flex-col items-center">
      <a href="https://schedules.ire.org/nicar-2025/">NICAR 25</a>
    </div>
    <div class="flex flex-col items-center">
      <a href="https://github.com/tylermachado/nicar25-sveltekit-app">Github</a>
    </div>
    <div class="flex flex-col items-center">
      <a href="https://thecatapi.com/">The Cat API</a>
    </div>
  </div>
</footer>
