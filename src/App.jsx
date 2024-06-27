import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-wrap">
                <Category />
                <div className="flex flex-col bg-slate-600 justify-center items-center w-full">
                    <ProductListingPage />
                </div>
            </main>
        </>
    );
}

export default App;
