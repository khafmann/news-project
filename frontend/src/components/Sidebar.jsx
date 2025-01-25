export default function Sidebar() {
    const categories = [
        "Политика", "Казахстан", "Мировые", "Бизнес",
        "Карьера", "Финансы", "Здоровье", "Образование",
        "Технологии", "Звёзды", "Спорт"
    ];

    return (
        <aside className="w-1/12 bg-white shadow p-6 rounded">
            <h2 className="font-bold text-lg mb-4">Категории</h2>
            <ul>
                {categories.map((cat, idx) => (
                    <li key={idx} className="py-2 text-gray-700 hover:text-black">
                        {cat}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
