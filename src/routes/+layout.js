import breedsData from '$lib/data/breeds.json';

export function load() {
  return { breedsData }; // Makes `breedsData` available to all pages
}
