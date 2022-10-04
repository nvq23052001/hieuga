import Home from ".././Page/Home";
import SignIn from ".././Page/SignIn";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/signin", component: SignIn, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
