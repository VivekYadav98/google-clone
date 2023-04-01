import { lazy } from "react";

export const LayoutRoutes = [
    {
        id:'0',
        path: '/',
        Component: lazy(() => import('../../pages/home'))
    }, 
    {
        id:'1',
        path: '/search',
        Component: lazy(() => import('../../pages/searchpage'))
    }
]