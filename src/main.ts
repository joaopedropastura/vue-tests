import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

import test from '../src/components/Test.vue'

createApp(test).mount('.test')
createApp(App).mount('#app')
