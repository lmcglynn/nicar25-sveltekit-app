import { writable } from 'svelte/store';

const selectedCountry = writable('');

// Check if we're in the browser (client-side)
if (typeof window !== 'undefined') {
  const savedCountry = localStorage.getItem('selectedCountry');
  if (savedCountry) {
    selectedCountry.set(savedCountry);
  }

  // Subscribe to the store to update localStorage whenever the value changes
  selectedCountry.subscribe(value => {
    if (value && value !== '') {
      localStorage.setItem('selectedCountry', value);
    } else {
      localStorage.removeItem('selectedCountry');
    }
  });
}

export default selectedCountry;
