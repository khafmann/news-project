export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <h1 className="text-2xl font-bold">NE JAÑALYQ</h1>
            <nav className="flex space-x-4">
                <a href="#" className="btn-header">Главная</a>
                <a href="#" className="btn-header">Видео</a>
                <a href="#" className="btn-header">Погода</a>
            </nav>
            <input
                type="text"
                placeholder="Поиск"
                className="px-4 py-2 rounded border border-gray-300"
            />
        </header>
    );
}
