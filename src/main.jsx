import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store.js";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import Layout from "./components/Layout.jsx";
import CartPage from "./pages/CartPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <App /> // Home page
            </Layout>
        ),
    },
    {
        path: "/products",
        element: (
            <Layout>
                <ProductListingPage />
            </Layout>
        ),
    },
    {
        path: "/products/:id",
        element: (
            <Layout>
                <ProductDetailPage />
            </Layout>
        ),
    },
    {
        path: "/category/:category",
        element: (
            <Layout>
                <CategoryPage />
            </Layout>
        ),
    },
    {
        path: "/cart",
        element: (
            <Layout>
                <CartPage />
            </Layout>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

serviceWorkerRegistration.register();
