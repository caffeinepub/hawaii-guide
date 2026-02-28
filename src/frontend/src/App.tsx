import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import DiningHawaii from "./pages/DiningHawaii";
import HawaiiGuide from "./pages/HawaiiGuide";
import VisitOahu2 from "./pages/VisitOahu2";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HawaiiGuide,
});

const diningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dining",
  component: DiningHawaii,
});

const visitOahuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/visit-oahu",
  component: VisitOahu2,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  diningRoute,
  visitOahuRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
