import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '/', title: 'Home',  icon: 'dashboard', class: 'active' },
    { path: '/custom-schedule', title: 'Custom Watering',  icon:'filter_vintage', class: '' },
   // { path: '/settings/api', title: 'API',  icon:'cloud', class: '' },
    { path: '#', title: 'User Profile',  icon:'person', class: '' },
    { path: '#', title: 'Administration',  icon:'account_circle', class: '' }
];
