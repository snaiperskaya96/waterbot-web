import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '/', title: 'Home',  icon: 'dashboard', class: 'active' },
    { path: '/custom-schedule', title: 'Custom Watering',  icon:'date_range', class: '' },
    { path: '/settings', title: 'Settings',  icon:'settings', class: '' },
    { path: '/profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/admin', title: 'Administration',  icon:'account_circle', class: '' }
];
