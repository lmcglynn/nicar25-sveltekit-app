<script>
  import { onMount } from 'svelte';
  let data;
  let loading = true;
  let error;

  export let searchId;
  export let altText;

  onMount(async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchId}`, {
        headers: {
          'x-api-key': `${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      data = await response.json();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  });
</script>

<div class="relative w-full aspect-w-4 aspect-h-3 flex items-center justify-center">
  {#if loading}
    <p class="text-center">Loading...</p>
  {:else if error}
    <p class="text-center">Error: {error}</p>
  {:else}
    <img src={data[0].url} alt="{altText}" class="object-cover w-full h-full" />
  {/if}
</div>
