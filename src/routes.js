import Entry from './entry.svelte'
import Components from './components.svelte'

const routes = [
  {
    name: '/',
    component: Entry,
  },
  {
    name: '/components',
    component: Components,
  },
]

export { routes }