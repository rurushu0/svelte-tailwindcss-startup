<script>
  // eslint-disable-next-line no-unused-vars
  import Tailwind from './Tailwindcss.svelte'
  let name = 'Svelte'
</script>

<style>
  h1 {
    @apply text-4xl text-orange-800 text-center;
  }
</style>

<h1>Hello {name}</h1>
