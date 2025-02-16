<script>
  import '../app.css';
  export let image = "";
  export let title = "Unknown";
  export let subtitle = "N/A";
  export let description = "No description provided.";
</script>

<div class="card bg-background shadow-lg rounded-xl overflow-hidden border border-border max-w-sm">
  <img src={image} alt={title} class="w-full h-48 object-cover" />
  <div class="p-4">
    <h2 class="text-xl font-bold">{title}</h2>
    <p class="text-sm text-muted">{subtitle}</p>
    <p class="text-base text-foreground mt-2">{description}</p>
  </div>
</div>