<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import selectedCountry from "$stores/countryStore";  
  import { filteredBreedsStore } from '$stores/filteredBreedsStore';


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

<main class="container mx-auto my-6 flex justify-center w-full">
  <slot />
</main>
