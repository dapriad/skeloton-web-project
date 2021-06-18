import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// set id to body for vue
// let body = document.getElementsByTagName('body')[0];
// body.id = "app";

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");