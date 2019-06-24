import Index from '../client/container/Index'
import Page from '../client/container/Page'
import { fetchFakeData } from '../service/api'

export default [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/page',
    component: Page,
    fetchInitialData: type => fetchFakeData(type)
  }
]