<script>
  import Tailwindcss from './Tailwindcss.svelte'
  let name = 'Svelte'
</script>

<style>
  h1 {
    @apply text-5xl text-orange-700 text-center;
  }
</style>

<Tailwindcss />
<main>
  <h1 class="uppercase font-thin">Hello {name}</h1>
</main>
