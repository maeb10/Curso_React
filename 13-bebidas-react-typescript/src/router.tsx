import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

const IndexPage = lazy(() => import("./pages/IndexPage"))
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback="Cargando...">
                        <IndexPage />
                    </Suspense>
                )
            },
            {
                path: 'favoritos',
                element: (
                    <Suspense fallback="Cargando...">
                        <FavoritesPage />
                    </Suspense>
                )
            }
        ]
    },
])