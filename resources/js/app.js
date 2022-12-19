import "./bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp({});

// import ExampleComponent from "./components/ExampleComponent.vue";
// app.component("example-component", ExampleComponent);
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import Forget from "@/components/auth/Forget.vue";

// Router Imported
// import { routes } from "./routes";
const routes = [
    { path: "/", component: Login, name: "/" },
    { path: "/register", component: Register, name: "register" },
    { path: "/forget", component: Forget, name: "forget" },
];

// Import User Class
import User from "./Helpers/User";

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

app.use(router);
app.mount("#app");
