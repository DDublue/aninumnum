/**
 * Array of routes that are accessible to the public.
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  '/',
];

/**
 * Array of routes that used for authentication.
 * These routes will redirect logged in users to the landing page
 * @type {string[]}
 */
export const authRoutes = [
  '/login',
];

/**
 * Prefix for API authentication routes.
 * Routes that start with this prefix are used API authentication
 * purposes.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/';
