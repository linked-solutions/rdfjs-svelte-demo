<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'

  document.title = 'RDFJS Svelte'
</script>

<Router {routes} />