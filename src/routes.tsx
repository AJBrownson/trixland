import React from 'react';

import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAttachMoney,
  MdInventory,
  MdPeople,
  MdSettings,
} from 'react-icons/md';


// Admin Routes
const adminRoutes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: 'dashboard',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Orders',
    layout: '/admin',
    path: 'orders',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: 'Deposits',
    layout: '/admin',
    path: 'deposits',
    icon: <MdAttachMoney className="h-6 w-6" />,
  },
  {
    name: 'Products',
    layout: '/admin',
    path: 'products',
    icon: <MdInventory className="h-6 w-6" />,
  },
  {
    name: 'Customers',
    layout: '/admin',
    path: 'users',
    icon: <MdPeople className="h-6 w-6" />,
  },
  {
    name: 'Followers',
    layout: '/admin',
    path: 'followers',
    icon: <MdPeople className="h-6 w-6" />,
  },
  {
    name: 'Settings',
    layout: '/admin',
    path: 'settings',
    icon: <MdSettings className="h-6 w-6" />,
  },
];

// App User Routes
const appRoutes = [
  {
    name: 'Dashboard',
    layout: '/app',
    path: 'dashboard',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Products',
    layout: '/app',
    path: 'products',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: 'Buy Followers',
    layout: '/app',
    path: 'buy-followers',
    icon: <MdBarChart className="h-6 w-6" />,
  },
  {
    name: 'My Orders',
    layout: '/app',
    path: 'orders',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Wallet',
    layout: '/app',
    path: 'wallet',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Settings',
    layout: '/app',
    path: 'settings',
    icon: <MdPerson className="h-6 w-6" />,
  },
];

// Auth Routes (shared between admin and app)
const authRoutes = [
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
];

export { adminRoutes, appRoutes, authRoutes };
