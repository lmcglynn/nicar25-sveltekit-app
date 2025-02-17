<script>
  import '../app.css';
  import ImageFetch from './ImageFetch.svelte';
  export let image = "";
  export let title = "Unknown";
  export let subtitle = "N/A";
  export let description = "No description provided.";
</script>

<div class="card bg-background shadow-lg rounded-xl overflow-hidden border border-border max-w-sm">
  <ImageFetch
    searchId={image}
    altText={title}
  />
  <div class="p-4">
    <h2 class="text-xl font-bold">{title}</h2>
    <p class="text-sm text-muted">{subtitle}</p>
  </div>
</div>