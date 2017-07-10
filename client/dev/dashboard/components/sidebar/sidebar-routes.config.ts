import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '/', title: 'Home',  icon: 'dashboard', class: 'active' },
    { path: '/settings/api', title: 'API',  icon:'cloud', class: '' },
    { path: '/settings/plants', title: 'Plants Settings',  icon:'filter_vintage', class: '' },
    { path: 'user', title: 'User Profile',  icon:'person', class: '' }
];
