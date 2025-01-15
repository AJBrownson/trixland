import { IRoute } from 'types/navigation';

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute | null => {
  if (!isWindowAvailable() || !routes) return null;

  for (let route of routes) {
    if (!!route.items) {
      const found = findCurrentRoute(route.items, pathname);
      if (!!found) return found;
    }
    if (pathname?.match(route.path) && route) return route;
  }
  return null;
};

export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || 'Dashboard';
};

export const getActiveNavbar = (
  routes: IRoute[],
  pathname: string,
): boolean => {
  const route = findCurrentRoute(routes, pathname);
  return route?.secondary || false;
};

export const getActiveNavbarText = (
  routes: IRoute[],
  pathname: string,
): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};

// New helper function to determine which routes to use
export const getRoutesByPath = (pathname: string, 
  { adminRoutes, appRoutes, authRoutes }: { 
    adminRoutes: IRoute[], 
    appRoutes: IRoute[], 
    authRoutes: IRoute[] 
  }
): IRoute[] => {
  if (pathname.startsWith('/admin')) return adminRoutes;
  if (pathname.startsWith('/app')) return appRoutes;
  if (pathname.startsWith('/auth')) return authRoutes;
  return [];
};
