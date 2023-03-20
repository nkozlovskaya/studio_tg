import { RouteProps } from "react-router-dom";
import { HomePage } from "./../pages/HomePage";
import { CharactersPage } from "./../pages/CharactersPage";
import { ErrorPage } from "./../pages/ErrorPage";

export enum AppRoutes {
  HOME = "home",
  CHARACTERS = "characters",
  ERROR = "error",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.CHARACTERS]: "/characters",
  [AppRoutes.ERROR]: "/*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.CHARACTERS]: {
    path: RoutePath.characters,
    element: <CharactersPage />,
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <ErrorPage />,
  },
};
