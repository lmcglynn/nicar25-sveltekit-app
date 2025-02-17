<script>
  import "../app.css";
  import Header from "../components/Header.svelte";

  export let data;
  let countries = data.countries;
</script>

<Header options={countries} />

<main class="container mx-auto my-6 flex justify-center w-full">
  <slot />
</main>
