import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import { Carousel, initTWE } from "tw-elements";
initTWE({ Carousel } );
const app = createApp(App);

app.use(router); // Use the router

app.mount('#app');

// document.addEventListener("DOMContentLoaded", function () {
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach((link) => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);
//             targetElement.scrollIntoView({
//                 behavior: "smooth",
//             });
//         });
//     });
// });
