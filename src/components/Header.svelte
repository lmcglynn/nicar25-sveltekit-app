<script>
import "../app.css";
export let options;  
</script>

<div class="w-full flex justify-between items-center bg-black px-4 py-8">
  <span class="text-xl font-bold text-white	">First SvelteKit Data App</span>
  <div class="flex items-center">
    <a href="/" class="text-white hover:text-gray-300">Home</a>
    <a href="/charts" class="ml-4 text-white hover:text-gray-300">Charts</a>
  </div>
</div>

<div class="w-full flex bg-gray-300 px-8 py-2 justify-center">
  <div>
    Country of Origin:
  </div>
  <select class="ml-4" name="country" id="country">
    <option value="">-</option>
    {#each options as country}
      <option value={country}>{country}</option>
    {/each}
</div>