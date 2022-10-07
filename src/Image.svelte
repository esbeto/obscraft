<script>
  import { onMount } from "svelte";

  export let alt = "";
  export let height = "auto";
  export let sizes = "";
  export let src = "";
  export let srcset = "";
  export let width = "auto";
  export let loading = "lazy";
  export let preloaded = false;

  /** @type {HTMLImageElement} */
  let thisImage;
  let loaded = preloaded;
  onMount(() => {
    if (thisImage.height > 0) {
      loaded = true;
      return;
    }

    thisImage.onload = () => {
      console.log("loaded")
      loaded = true;
    };
  });
</script>

<img
  {alt}
  class="lib-img"
  class:loaded
  bind:this={thisImage}
  {height}
  {sizes}
  {src}
  {srcset}
  {width}
  {loading}
/>

<style>
  img.lib-img {
    aspect-ratio: var(--img-aspect-ratio, unset);
    border-radius: var(--img-border-radius, unset);
    height: var(--img-height, auto);
    display: var(--img-display, block);
    line-height: 0;
    max-height: var(--img-max-height, auto);
    max-width: var(--img-max-width, 100%);
    object-fit: var(--img-object-fit, contain);
    object-position: var(--img-object-position, center);
    opacity: 0;
    margin: var(--img-margin, auto);
    overflow: var(--img-overflow, hidden);
    transition: opacity 1200ms ease-out;
    width: var(--img-width, auto);
  }

  img.loaded {
    opacity: 1;
  }
</style>
