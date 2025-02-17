<script>  
  import { LayerCake, ScaledSvg, Html, takeEvery } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import Column from '$components/layercake/Column.svelte';
  import AxisX from '$components/layercake/AxisX.percent-range.html.svelte';
  import AxisY from '$components/layercake/AxisY.percent-range.html.svelte';

  export let data; // `data` contains everything returned from `+layout.js`
  const breedsData = data.breedsData;

  $: breedNames = breedsData.map(d => d.name);

  const dataCountries = Object.entries(breedsData.reduce((acc, obj) => {
      const value = obj.origin;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {}))
    .map(([option, instances]) => ({ option, instances }))
    .filter(item => item.instances > 1);

  const dataSpan = Object.entries(breedsData.reduce((acc, obj) => {
      const value = obj.life_span;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {}))
    .map(([option, instances]) => ({ option, instances }))
    .filter(item => item.instances > 1);

  const dataWeights = Object.entries(breedsData.reduce((acc, obj) => {
    const value = obj.weight.imperial;
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {}))
  .map(([option, instances]) => ({ option, instances }))
    .filter(item => item.instances > 1);
</script>

<h2 class="mb-4">Cats by Country of Origin</h2>
<div class="chart-container mb-16">
  <LayerCake
    ssr
    percentRange
    position="absolute"
    padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
    x='option'
    y='instances'
    xScale={scaleBand().paddingInner(0.028).round(true)}
    xDomain={dataCountries.map(item => item.option)}
    yDomain={[0, 30]}
    data={dataCountries}
  >
    <Html>
      <AxisX gridlines baseline />
      <AxisY gridlines={false} tickMarks />
    </Html>
    <ScaledSvg>
      <Column />
    </ScaledSvg>
  </LayerCake>
</div>

<h2 class="mb-4">Cats by Lifespan, in Years</h2>
<div class="chart-container mb-16">
  <LayerCake
    ssr
    percentRange
    position="absolute"
    padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
    x='option'
    y='instances'
    xScale={scaleBand().paddingInner(0.028).round(false)}
    xDomain={dataSpan.map(item => item.option)}
    yDomain={[0, 30]}
    data={dataSpan}
  >
    <Html>
      <AxisX gridlines baseline />
      <AxisY gridlines={false} tickMarks />
    </Html>
    <ScaledSvg>
      <Column />
    </ScaledSvg>
  </LayerCake>
</div>

<h2 class="mb-4">Cats by Weight Class, in Pounds</h2>
<div class="chart-container mb-16">
  <LayerCake
    ssr
    percentRange
    position="absolute"
    padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
    x='option'
    y='instances'
    xScale={scaleBand().paddingInner(0.028).round(false)}
    xDomain={dataWeights.map(item => item.option)}
    yDomain={[0, 30]}
    data={dataWeights}
  >
    <Html>
      <AxisX gridlines baseline />
      <AxisY gridlines={false} tickMarks />
    </Html>
    <ScaledSvg>
      <Column />
    </ScaledSvg>
  </LayerCake>
</div>

<style>
  .chart-container {
    position: relative;
    width: 100%;
    height: 400px;
  }
</style>



