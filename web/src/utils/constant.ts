export const API_ENDPOINT = import.meta.env.VITE_API_ENPOINT;
export const VITE_APP_AUTHO_DOMAIN = import.meta.env.VITE_APP_AUTHO_DOMAIN;
export const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const VITE_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
export const VITE_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;


export const ROUTES = {
    LANDING_PAGE: '/',
    DASHBOARD: '/',
    ELEVATORS:'elevators',
    ELEVATORS_OPERATIONAL:'elevators/operational',
    ELEVATORS_WARNING:'elevators/warning',
    ELEVATORS_OUT_OF_SERVICE:'elevators/out-of-order',
    ELEVATOR_DETAILS: '/elevator/details',
    LOGIN: '/login',
    NOT_FOUND:'/not-found',
}