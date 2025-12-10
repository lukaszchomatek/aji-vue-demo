//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()

pinia.use(piniaPluginPersistedState)

pinia.use(({ store }) => {
  // tylko dla tego store'a – opcjonalnie
  if (store.$id === 'products') {
    store.$onAction(({ name, args, after, onError }) => {
      const start = performance.now()
      console.log(`[ACTION START] ${name}`, args)

      after((result) => {
        const end = performance.now()
        console.log(
          `[ACTION END]   ${name} – ${(end - start).toFixed(1)}ms`,
          'Result:',
          result
        )
      })

      onError((error) => {
        const end = performance.now()
        console.error(
          `[ACTION ERROR] ${name} – ${(end - start).toFixed(1)}ms`,
          error
        )
      })
    })
  }
})

const app = createApp(App)
app.use(pinia)

app.mount('#app')
