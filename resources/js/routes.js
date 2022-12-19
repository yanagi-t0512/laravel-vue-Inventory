import ExampleComponent from "./components/ExampleComponent.vue";
app.component("example-component", ExampleComponent);

export const routes = [{ path: "/", component: ExampleComponent }];
