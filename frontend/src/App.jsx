import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import NewsSection from "./components/NewsSection.jsx";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-grow p-10 justify-between space-x-10">
                <Sidebar />
                <main className="flex-1 p-10 bg-white rounded shadow">
                    <Hero />
                </main>
                <aside className="w-1/4 p-10 bg-white rounded shadow">
                    <NewsSection />
                </aside>
            </div>
        </div>
    );
}
