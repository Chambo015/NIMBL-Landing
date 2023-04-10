import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './assets/main.css'

gsap.registerPlugin(ScrollTrigger);
gsap.config({
    force3D: true,
  });
createApp(App).mount('#app')
