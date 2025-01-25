import News from "../assets/main-news.png";

export default function Hero() {
    return (
        <section className="flex flex-col bg-white shadow p-6 rounded">
            <h2 className="text-xl font-bold mb-4">Новость дня</h2>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={News}
                    alt="Новость_дня"
                    className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
                    <h3 className="text-lg font-bold">
                        DarynTech начала прием на курсы FullStack разработка
                    </h3>
                    <p className="text-sm text-gray-600">
                        1.5м просмотров · 35т комментариев
                    </p>
                </div>
            </div>
        </section>
    );
}
