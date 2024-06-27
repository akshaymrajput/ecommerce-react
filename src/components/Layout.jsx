import React, { useEffect } from "react";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="flex flex-col bg-slate-600">
            <NavigationMenu />
            <section className="min-h-screen flex flex-col">{children}</section>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </div>
    );
}
