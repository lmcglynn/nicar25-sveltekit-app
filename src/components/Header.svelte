<script>
import "../app.css";

import { AppBar } from '@skeletonlabs/skeleton';
let menuOpen = false;
</script>

<AppBar>
  <div class="container flex justify-between items-center">
    <a href="/" class="text-xl font-bold">MyApp</a>
    <button class="lg:hidden" on:click="{() => menuOpen = !menuOpen}" aria-label="Toggle menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
    </button>
    <nav class="hidden lg:flex space-x-4">
      <a href="/" class="hover:underline">Home</a>
      <a href="/about" class="hover:underline">About</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </nav>
  </div>

  {#if menuOpen}
    <nav class="absolute top-16 left-0 w-full bg-black text-white flex flex-col space-y-2 p-4 lg:hidden">
      <a href="/" class="hover:underline" on:click="{() => menuOpen = false}">Home</a>
      <a href="/about" class="hover:underline" on:click="{() => menuOpen = false}">About</a>
      <a href="/contact" class="hover:underline" on:click="{() => menuOpen = false}">Contact</a>
    </nav>
  {/if}
</AppBar>