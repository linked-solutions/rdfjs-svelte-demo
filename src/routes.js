import Entry from './Entry.svelte'
import Components from './Components.svelte'

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