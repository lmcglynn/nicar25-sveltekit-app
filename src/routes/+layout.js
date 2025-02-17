import breeds from '$lib/data/breeds.json';

export function load() {
  // Create a map to count occurrences of "origin" values
  const originCount = breeds.reduce((acc, breed) => {
    const origin = breed.origin;
    if (origin) {
      acc[origin] = (acc[origin] || 0) + 1;
    }
    return acc;
  }, {});

  // Filter out origins that occur more than twice
  const countries = Object.keys(originCount).filter(origin => originCount[origin] > 2);

  return { breeds, countries };
}
